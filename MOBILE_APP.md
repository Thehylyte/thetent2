# The Tent - Mobile App Documentation

## Overview

The Tent mobile app is a native iOS and Android application built using Capacitor, which wraps our existing React web application into a native mobile experience. This allows us to maintain a single codebase while delivering native mobile features.

## Architecture

### Technology Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Mobile Framework**: Capacitor 7.x
- **Build Tool**: Vite
- **Platforms**: iOS 13.0+, Android 5.1+ (API 22+)

### Project Structure
```
├── client/                 # React web application
├── ios/                   # iOS native project (generated)
├── android/               # Android native project (generated)
├── resources/             # App icons and splash screens
├── capacitor.config.ts    # Capacitor configuration
├── ios-deployment.md      # iOS deployment guide
├── android-deployment.md  # Android deployment guide
└── scripts/               # Build and deployment scripts
```

## Features

### Core Functionality
- ✅ Artist registration and authentication
- ✅ Festival service booking
- ✅ VIP amenity access
- ✅ Real-time notifications
- ✅ Offline-capable interface
- ✅ Mobile-optimized navigation

### Mobile-Specific Features
- ✅ Native splash screen
- ✅ Status bar configuration
- ✅ Safe area handling
- ✅ Native app lifecycle management
- ✅ Network status detection
- ✅ Keyboard management

## Development Workflow

### Prerequisites
- Node.js 18+
- npm or yarn
- iOS: Xcode 14+ (macOS required)
- Android: Android Studio

### Development Commands

```bash
# Development server (web)
npm run dev

# Build for mobile
npm run mobile:build

# Open iOS project
npm run mobile:ios

# Open Android project
npm run mobile:android

# Run on iOS simulator
npm run mobile:run:ios

# Run on Android emulator
npm run mobile:run:android

# Sync changes to mobile platforms
npm run mobile:sync
```

### Development Process

1. **Web Development**: Develop features using the standard web dev server
2. **Mobile Testing**: Use `npm run mobile:build` and test on simulators
3. **Native Features**: Add native functionality using Capacitor plugins
4. **Platform Sync**: Use `npm run mobile:sync` to update native projects

## App Store Information

### App Identity
- **Name**: The Tent
- **Subtitle**: VIP Festival Hospitality
- **Bundle ID**: club.thetent.app
- **Version**: 1.0.0
- **Category**: Lifestyle
- **Target Audience**: 17+ (Business/Professional)

### Description
The Tent provides exclusive VIP hospitality services for artists performing at major music festivals. Our mobile app offers seamless access to premium amenities, personalized concierge services, and luxury accommodations designed specifically for touring musicians.

### Key Features for App Store
- 🎪 **Exclusive Access**: VIP amenities at major festivals
- 👤 **Personal Concierge**: Dedicated support team
- 💆 **Wellness Services**: Grooming and relaxation facilities
- 🎵 **Artist Dashboard**: Manage bookings and schedules
- 📱 **Mobile-First**: Optimized for on-the-go use
- 🔒 **Secure Platform**: Verified artist-only access

### Screenshots Strategy
1. **Hero Screen**: Main dashboard with festival selection
2. **Service Booking**: VIP amenities booking interface
3. **Artist Profile**: Registration and verification flow
4. **Festival Details**: Sea.Hear.Now festival example
5. **Mobile Navigation**: Responsive design showcase

## Privacy & Security

### Data Collection
- Artist registration information
- Festival preferences and bookings
- Usage analytics (anonymized)
- Network connectivity status

### Privacy Compliance
- GDPR compliant
- CCPA compliant  
- Privacy Policy: https://thetent.club/privacy
- Terms of Service: https://thetent.club/terms

### Security Features
- HTTPS-only communication
- Secure credential storage
- Encrypted data transmission
- Regular security updates

## Performance Optimization

### Web Performance
- Code splitting and lazy loading
- Optimized image delivery
- Minimal bundle size
- Fast loading animations

### Mobile Performance
- Native navigation transitions
- Efficient memory usage
- Battery optimization
- Offline functionality

## Deployment

### iOS App Store
- **Account**: Apple Developer Program ($99/year)
- **Review Time**: 24-48 hours typically
- **Requirements**: Xcode, macOS, signing certificates
- **Distribution**: App Store Connect

### Google Play Store
- **Account**: Google Play Console ($25 one-time)
- **Review Time**: 3-7 days typically
- **Requirements**: Android Studio, signing key
- **Distribution**: Google Play Console

### Automated Deployment
Use the deployment script for streamlined builds:

```bash
# Deploy to iOS
./scripts/deploy-mobile.sh ios

# Deploy to Android  
./scripts/deploy-mobile.sh android

# Prepare both platforms
./scripts/deploy-mobile.sh both
```

## Monitoring & Analytics

### Performance Monitoring
- App launch time tracking
- Screen load performance
- Network request monitoring
- Crash reporting

### User Analytics
- Registration funnel analysis
- Feature usage tracking
- Festival booking patterns
- User retention metrics

## Maintenance

### Regular Updates
- **Security patches**: Monthly
- **Feature updates**: Quarterly
- **Platform updates**: As needed
- **Content updates**: Ongoing

### Platform Compatibility
- iOS: Support latest 3 major versions
- Android: Support API 22+ (covers 95%+ devices)
- Regular testing on popular devices

## Support & Documentation

### Developer Resources
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Android Design Guidelines](https://material.io/design)

### Troubleshooting
- Check `ios-deployment.md` for iOS-specific issues
- Check `android-deployment.md` for Android-specific issues
- Review Capacitor logs for native bridge issues
- Test on physical devices before release

---

**Ready to launch The Tent mobile app and revolutionize the festival experience for artists! 🎪📱**
