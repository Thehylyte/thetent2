// Simple app icon generation script
// In production, you'd use a proper icon generation tool like @capacitor/assets

const fs = require("fs");
const path = require("path");

// SVG icon template for The Tent
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="512" cy="512" r="512" fill="url(#gradient)"/>
  
  <!-- Tent icon -->
  <g transform="translate(262, 262)">
    <!-- Tent structure -->
    <path d="M250 450 L150 200 L350 200 Z" fill="white" stroke="white" stroke-width="4"/>
    <path d="M150 200 L250 50 L350 200" fill="none" stroke="white" stroke-width="8"/>
    <path d="M250 50 L250 450" stroke="white" stroke-width="4"/>
    
    <!-- Tent entrance -->
    <path d="M200 350 L220 400 L280 400 L300 350 Z" fill="#f1f5f9"/>
    
    <!-- Ground line -->
    <line x1="120" y1="450" x2="380" y2="450" stroke="white" stroke-width="6"/>
  </g>
  
  <!-- App name -->
  <text x="512" y="750" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="72" font-weight="bold">THE TENT</text>
</svg>
`;

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, "..", "resources", "icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Write the SVG icon
fs.writeFileSync(path.join(iconsDir, "icon.svg"), iconSvg);

console.log("✅ App icon SVG generated at resources/icons/icon.svg");
console.log(
  "📱 To generate all required sizes, use: npm install -g @capacitor/assets && npx capacitor-assets generate",
);
