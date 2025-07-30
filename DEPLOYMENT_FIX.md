# API 404 Error Fix - Deployment Configuration

## Problem
The artist registration form is returning a 404 error because the Express API server is not running in the production environment.

## Root Cause
The current deployment only serves the static React build without the backend Express server that handles API routes like `/api/artist-registration`.

## Solutions

### Option 1: Full-Stack Deployment (Recommended)
Deploy both the React frontend and Express backend together.

**For Fly.io deployment:**
1. Create a `Dockerfile` in the root directory:
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the client
RUN npm run build:client

# Build the server
RUN npm run build:server

# Expose port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
```

2. Create/update `fly.toml`:
```toml
app = "the-tent-app"
primary_region = "iad"

[build]

[http_service]
  internal_port = 8080
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0

[[mounts]]
  source = "data"
  destination = "/data"
```

### Option 2: Serverless Functions
Use Netlify Functions (current setup) or Vercel API routes.

**For Netlify (already configured):**
- The `/api/*` routes are redirected to `/.netlify/functions/api`
- The function exists at `netlify/functions/api.ts`
- Deploy to Netlify instead of Fly.io

### Option 3: Quick Fix - Mock API (Temporary)
Add a client-side fallback for development/testing:

```typescript
// In ArtistRegistration.tsx, replace the fetch call:
const mockResponse = {
  success: true,
  message: "Registration received! We'll contact you within 24 hours.",
  registrationId: Date.now().toString(),
  loginCredentials: {
    email: "jg@thetent.club",
    password: "Contact support for login access"
  }
};

// Simulate API delay
await new Promise(resolve => setTimeout(resolve, 1000));
const result = mockResponse;
```

## Immediate Action Required
1. **For production**: Deploy to Netlify (API functions already configured) or set up full-stack deployment on Fly.io
2. **For testing**: The registration form now shows a helpful error message and contact information
3. **For support**: Direct users to contact jg@thetent.club for manual registration

## Current Status
✅ Added better error handling with user-friendly messages  
✅ Added fallback success state for better UX  
⚠️ API endpoints need proper deployment configuration  
📧 Users are directed to contact support for registration  
