# The Tent - App Store Deployment Checklist

## ✅ Pre-Submission Checklist

### 1. App Identity
- [x] Bundle ID: club.thetent.app
- [x] App Name: The Tent
- [x] Display Name: The Tent - VIP Festival Experience
- [x] Version: 1.0.0
- [x] Build Number: 1

### 2. Apple Developer Requirements
- [ ] Active Apple Developer Account ($99/year)
- [ ] Xcode 14+ installed
- [ ] macOS device for development
- [ ] iOS Development Certificate
- [ ] App Store Distribution Certificate

### 3. App Store Connect Setup
- [ ] Create app record in App Store Connect
- [ ] Configure app information
- [ ] Add app description (see app-store-description.txt)
- [ ] Add keywords: music festival, VIP, hospitality, artist services, luxury, festival experience, concierge, entertainment
- [ ] Upload app icon (1024x1024px)
- [ ] Add screenshots (see requirements below)
- [ ] Set pricing (Free)
- [ ] Configure availability (All countries/regions)

### 4. Required Screenshots (Upload to App Store Connect)
- [ ] iPhone 6.7" (1290 x 2796): 3-10 screenshots
- [ ] iPhone 6.1" (1179 x 2556): 3-10 screenshots  
- [ ] iPhone 5.5" (1242 x 2208): 3-10 screenshots
- [ ] iPad Pro 12.9" (2048 x 2732): 3-10 screenshots

### 5. App Store Information
- [ ] App description: Use app-store-description.txt
- [ ] Privacy Policy URL: https://thetent.club/privacy
- [ ] Support URL: https://thetent.club
- [ ] Marketing URL: https://thetent.club
- [ ] Content rating: 4+ (No objectionable content)
- [ ] Copyright: © 2024 The Tent, LLC

### 6. Build & Upload Process
- [ ] Build web app: `npm run build:client`
- [ ] Sync with iOS: `npm run mobile:sync`
- [ ] Open iOS project: `npm run mobile:ios`
- [ ] Configure signing & provisioning in Xcode
- [ ] Archive app (Product → Archive)
- [ ] Upload to App Store Connect via Organizer
- [ ] Submit for review in App Store Connect

### 7. Final Review Setup
- [ ] Select uploaded build in App Store Connect
- [ ] Complete all app information sections
- [ ] Add release notes for version 1.0.0
- [ ] Submit for Apple review

## 📱 Build Commands

```bash
# 1. Build the web application
npm run build:client

# 2. Sync with iOS platform  
npm run mobile:sync

# 3. Open iOS project in Xcode
npm run mobile:ios
```

## 🏗️ Xcode Configuration

### Project Settings
- **Bundle Identifier**: club.thetent.app
- **Display Name**: The Tent
- **Version**: 1.0.0
- **Build**: 1
- **Deployment Target**: iOS 13.0
- **Supported Devices**: iPhone, iPad
- **Orientation**: Portrait

### Signing & Capabilities
1. Select your Apple Developer Team
2. Enable "Automatically manage signing"
3. Ensure provisioning profiles are valid

## 📋 App Store Connect Details

### App Information
- **Name**: The Tent
- **Subtitle**: VIP Festival Hospitality
- **Bundle ID**: club.thetent.app
- **SKU**: thetent-ios-app
- **Primary Language**: English (U.S.)

### Categories
- **Primary**: Lifestyle
- **Secondary**: Entertainment

### Pricing
- **Price Tier**: Free
- **Availability**: All countries and regions

## 🎯 Success Criteria

### Before Submission
- [ ] App builds successfully in Xcode
- [ ] App runs on physical iOS device
- [ ] All features work as expected
- [ ] Screenshots taken from actual app
- [ ] App Store description is compelling

### After Submission
- [ ] Build appears in App Store Connect
- [ ] All metadata is complete
- [ ] App submitted for review
- [ ] Apple review process initiated

## 📞 Support & Resources

- **Developer Support**: hello@thetent.club
- **Website**: https://thetent.club
- **Apple Developer**: https://developer.apple.com/support/
- **App Store Guidelines**: https://developer.apple.com/app-store/review/guidelines/

## ⚡ Quick Reference

**Your iOS Project Location**: `ios/App/App.xcodeproj`

**Essential Files**:
- Xcode Project: `ios/App/App.xcodeproj`
- App Configuration: `ios/App/App/Info.plist`
- App Icons: `ios/App/App/Assets.xcassets/AppIcon.appiconset/`
- Built Web App: `ios/App/App/public/`

**Ready to launch The Tent on the App Store! 🎪📱**
