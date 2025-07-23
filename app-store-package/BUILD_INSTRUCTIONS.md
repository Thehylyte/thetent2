# iOS Build Instructions for The Tent

## Prerequisites

### Required Software
1. **macOS** (required for iOS development)
2. **Xcode 14+** (download from Mac App Store)
3. **Node.js 18+** (for building the web app)
4. **Apple Developer Account** ($99/year subscription)

### Required Accounts
- **Apple Developer Account**: https://developer.apple.com/
- **App Store Connect Access**: https://appstoreconnect.apple.com/

## Step-by-Step Build Process

### Step 1: Prepare Your Environment

```bash
# Ensure you're in the project root directory
cd /path/to/the-tent-project

# Install dependencies (if not already done)
npm install

# Verify Capacitor is ready
npx cap doctor
```

### Step 2: Build the Web Application

```bash
# Build the optimized web app for production
npm run build:client

# This creates: dist/spa/ with your built React app
```

### Step 3: Sync with iOS Platform

```bash
# Sync the built web app with iOS platform
npm run mobile:sync

# This copies your web app to: ios/App/App/public/
```

### Step 4: Open iOS Project in Xcode

```bash
# Open the iOS project in Xcode
npm run mobile:ios
```

**Or manually open**: `ios/App/App.xcodeproj`

### Step 5: Configure Project in Xcode

#### 5.1 Project Identity
In Xcode, select the "App" target and verify:

- **Bundle Identifier**: `club.thetent.app`
- **Display Name**: `The Tent`
- **Version**: `1.0.0`
- **Build**: `1`

#### 5.2 Deployment Info
- **Deployment Target**: iOS 13.0
- **Supported Device Families**: ✅ iPhone, ✅ iPad
- **Supported Interface Orientations**: Portrait only

#### 5.3 Signing & Capabilities
1. Select your **Apple Developer Team**
2. Enable **"Automatically manage signing"**
3. Verify **Bundle Identifier** matches your App Store Connect app

#### 5.4 App Icons
App icons are automatically configured from `resources/icon.svg`:
- Verify icons appear in `Assets.xcassets → AppIcon`
- Icons should be generated for all required sizes

### Step 6: Build & Test

#### 6.1 Test on Simulator
1. Select an iOS Simulator (iPhone 14, iPad, etc.)
2. Click **Play** button to build and run
3. Test core functionality in simulator

#### 6.2 Test on Physical Device
1. Connect your iPhone/iPad via USB
2. Select your device in Xcode
3. Click **Play** button to install and test
4. Verify app works correctly on actual hardware

### Step 7: Archive for App Store

#### 7.1 Prepare for Archive
1. Select **"Any iOS Device (arm64)"** as build target
2. **DO NOT** use Simulator for App Store builds
3. Clean build folder: **Product → Clean Build Folder**

#### 7.2 Create Archive
1. **Product → Archive**
2. Wait for build to complete (may take 2-5 minutes)
3. Archive will appear in Organizer when complete

### Step 8: Upload to App Store Connect

#### 8.1 Open Organizer
1. **Window → Organizer**
2. Select **Archives** tab
3. Find your latest "The Tent" archive

#### 8.2 Distribute App
1. Click **"Distribute App"**
2. Choose **"App Store Connect"**
3. Click **"Upload"**
4. Select **"Automatically manage signing"**
5. Click **"Upload"**

#### 8.3 Monitor Upload
- Upload typically takes 5-15 minutes
- You'll receive email confirmation when complete
- Build will appear in App Store Connect within 30 minutes

## App Store Connect Configuration

### Step 9: Complete App Information

#### 9.1 App Store Listing
1. Go to **App Store Connect**
2. Select **"The Tent"** app
3. Go to **App Store** tab

#### 9.2 Required Information
- **App Name**: The Tent
- **Subtitle**: VIP Festival Hospitality
- **Description**: Use content from `app-store-description.txt`
- **Keywords**: music festival, VIP, hospitality, artist services, luxury
- **Support URL**: https://thetent.club
- **Marketing URL**: https://thetent.club
- **Privacy Policy URL**: https://thetent.club/privacy

#### 9.3 Upload Assets
- **App Store Icon**: 1024×1024px PNG (no transparency)
- **Screenshots**: See requirements in DEPLOYMENT_CHECKLIST.md

### Step 10: Submit for Review

#### 10.1 Select Build
1. In **App Store Connect**, go to your app
2. Click **"+ Version or Platform"**
3. Select your uploaded build

#### 10.2 Complete Submission
1. Fill in **"What's New in This Version"** (release notes)
2. Complete **Rating** questionnaire
3. Review all information is correct
4. Click **"Submit for Review"**

## Troubleshooting Common Issues

### Build Errors

**"No signing certificate found"**
- Solution: Ensure Apple Developer account is active
- Add your Apple ID in Xcode Preferences → Accounts

**"Bundle identifier already in use"**
- Solution: Change bundle ID to something unique
- Update in both Xcode and App Store Connect

**"Web app not found"**
- Solution: Run `npm run build:client` first
- Then run `npm run mobile:sync`

### Archive Issues

**"Generic iOS Device not available"**
- Solution: Select "Any iOS Device (arm64)" not simulator
- Ensure no device is connected that might interfere

**"App Store distribution certificate not found"**
- Solution: Let Xcode manage signing automatically
- Or manually create certificates in Apple Developer portal

### Upload Issues

**"Upload failed with authentication error"**
- Solution: Verify Apple ID has App Manager role
- Check Two-Factor Authentication is enabled

**"Bundle version already exists"**
- Solution: Increment build number in Xcode
- Build number must be unique for each upload

## Support Resources

### Apple Documentation
- **iOS App Distribution**: https://developer.apple.com/documentation/appstoreconnectapi
- **Xcode Help**: https://help.apple.com/xcode/
- **App Store Review Guidelines**: https://developer.apple.com/app-store/review/guidelines/

### The Tent Support
- **Email**: hello@thetent.club
- **Website**: https://thetent.club

## Final Checklist

Before submitting to App Store:

- [ ] App builds and runs without errors
- [ ] Tested on both simulator and physical device  
- [ ] All features work as expected
- [ ] App Store listing is complete
- [ ] Screenshots are high quality and representative
- [ ] Privacy policy and terms are accessible
- [ ] Support contact information is correct

**You're ready to launch The Tent on the App Store! 🚀**

---

**Estimated Timeline**:
- **Build & Upload**: 30-60 minutes
- **App Store Connect Setup**: 1-2 hours  
- **Apple Review**: 24-48 hours
- **Total Time to Live**: 2-4 days
