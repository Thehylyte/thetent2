# Android Play Store Deployment Guide

## Prerequisites

1. **Google Play Developer Account** ($25 one-time fee)
2. **Android Studio** (Latest version)
3. **Java Development Kit (JDK)**

## Step-by-Step Deployment

### 1. Initial Setup

```bash
# Build the web app and sync with Android
npm run mobile:build

# Open the Android project in Android Studio
npm run mobile:android
```

### 2. Configure App in Android Studio

1. **App Identity**
   - Application ID: `club.thetent.app`
   - App Name: `The Tent`
   - Version Name: `1.0.0`
   - Version Code: `1`

2. **Build Configuration**
   - Target SDK: 34 (Android 14)
   - Minimum SDK: 22 (Android 5.1)
   - Compile SDK: 34

3. **Signing Configuration**
   - Generate signing key
   - Configure release build type

### 3. Generate Signed APK/AAB

```bash
# In Android Studio:
# Build > Generate Signed Bundle/APK
# Choose Android App Bundle (AAB) for Play Store
```

### 4. Google Play Console Setup

1. **Create App**
   - App Name: "The Tent"
   - Default Language: English (US)
   - App Category: Lifestyle
   - Content Rating: Everyone

2. **Store Listing**
   - Short Description: "VIP festival hospitality for artists"
   - Full Description: [See detailed description below]
   - App Icon: Generated from `resources/icon.svg`

### 5. App Metadata

**Play Store Description:**
```
Experience exclusive VIP hospitality services designed specifically for artists performing at major music festivals.

🎪 Premium Festival Services:
• Priority access to exclusive amenities
• Dedicated personal concierge services
• Luxury grooming and wellness facilities
• Private lounge access
• Professional styling services
• Seamless festival coordination

🎵 Artist-Focused Features:
• Easy registration and verification
• Real-time service booking
• Festival schedule management
• Exclusive brand partnerships
• Mobile-optimized dashboard

The Tent transforms your festival experience from stressful to seamless. Our white-glove service ensures you can focus on your performance while we handle everything else.

Perfect for:
✓ Touring musicians and artists
✓ Festival performers
✓ Music industry professionals
✓ VIP festival experiences

Join the exclusive community of artists who trust The Tent for their festival hospitality needs.
```

### 6. Graphics Requirements

**Feature Graphic:** 1024 x 500 pixels
**App Icon:** 512 x 512 pixels
**Screenshots:** 
- Phone: 1080 x 1920 pixels (minimum 2, maximum 8)
- Tablet: 1200 x 1920 pixels (optional)

### 7. Content Rating

- **Target Audience:** Adults
- **Content Type:** Business/Professional Services
- **Rating:** Everyone
- **Ads:** No ads present

### 8. App Bundle Upload

1. Upload signed AAB to Play Console
2. Complete store listing
3. Set up content rating
4. Configure pricing (Free)
5. Submit for review

### 9. Release Management

**Release Tracks:**
- **Internal Testing:** Team testing
- **Closed Testing:** Beta testers
- **Open Testing:** Public beta
- **Production:** Live on Play Store

**Review Timeline:** 3-7 days typically

## Important Notes

- **Target Android Version:** Android 5.1+ (API 22+)
- **Device Support:** Phones and tablets
- **Orientation:** Portrait (primary)
- **Permissions:** 
  - `android.permission.INTERNET`
  - `android.permission.ACCESS_NETWORK_STATE`
- **Privacy Policy Required:** Yes (https://thetent.club/privacy)

## Key Files

- `android/app/build.gradle` - Build configuration
- `android/app/src/main/AndroidManifest.xml` - App permissions
- `resources/android/` - Generated icons and splash screens
