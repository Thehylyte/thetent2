# iOS App Store Deployment Guide

## Prerequisites

1. **Apple Developer Account** ($99/year)
2. **Xcode** (Latest version from Mac App Store)
3. **macOS** (Required for iOS development)

## Step-by-Step Deployment

### 1. Initial Setup

```bash
# Build the web app and sync with iOS
npm run mobile:build

# Open the iOS project in Xcode
npm run mobile:ios
```

### 2. Configure App in Xcode

1. **App Identity**
   - Bundle Identifier: `club.thetent.app`
   - Display Name: `The Tent`
   - Version: `1.0.0`
   - Build Number: `1`

2. **Team & Signing**
   - Select your Apple Developer Team
   - Enable "Automatically manage signing"

3. **App Icons & Launch Screen**
   - Icons are automatically generated from `resources/icon.svg`
   - Launch screen uses `resources/splash.svg`

### 3. App Store Connect Setup

1. **Create App Record**
   - App Name: "The Tent"
   - SKU: `thetent-ios-app`
   - Bundle ID: `club.thetent.app`

2. **App Information**
   - Primary Category: Lifestyle
   - Secondary Category: Entertainment
   - Content Rights: Does not use third-party content

3. **Privacy Policy & Terms**
   - Privacy Policy URL: `https://thetent.club/privacy`
   - Terms of Service: `https://thetent.club/terms`

### 4. App Metadata

**App Store Description:**
```
The Tent provides exclusive VIP hospitality services for artists performing at major music festivals. 

Features:
• Priority access to premium amenities
• Personalized concierge services  
• Luxury grooming and wellness services
• Exclusive lounge access
• Festival scheduling and coordination
• Professional styling services

Designed specifically for touring artists, The Tent ensures your festival experience is seamless, comfortable, and memorable.
```

**Keywords:**
`music festival, VIP, hospitality, artist services, luxury, festival experience, concierge, entertainment`

### 5. Screenshots Required

- **6.7" iPhone (iPhone 14 Pro Max)**: 3 screenshots minimum
- **6.1" iPhone (iPhone 14)**: 3 screenshots minimum  
- **5.5" iPhone (iPhone 8 Plus)**: 3 screenshots minimum
- **12.9" iPad Pro**: 3 screenshots minimum

### 6. Build & Submit

```bash
# Archive the app in Xcode
# Product > Archive

# Upload to App Store Connect
# Window > Organizer > Upload to App Store
```

### 7. TestFlight Beta Testing

1. Upload build to App Store Connect
2. Add internal testers (Apple Developer Team)
3. Add external testers (up to 10,000)
4. Distribute test build

### 8. App Review Submission

1. Complete app metadata
2. Add screenshots
3. Set pricing (Free)
4. Submit for review

**Review Timeline:** 24-48 hours typically

## Important Notes

- **Target iOS Version:** iOS 13.0+
- **Device Support:** iPhone and iPad
- **Orientation:** Portrait (primary)
- **Background Modes:** None required
- **Permissions:** Network access only
