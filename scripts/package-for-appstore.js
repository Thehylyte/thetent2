#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📱 Creating App Store Deployment Package...\n');

// Create deployment package directory
const packageDir = 'app-store-package';
const timestamp = new Date().toISOString().split('T')[0];
const fullPackageDir = `${packageDir}-${timestamp}`;

if (!fs.existsSync(fullPackageDir)) {
  fs.mkdirSync(fullPackageDir, { recursive: true });
}

// App metadata for deployment
const appMetadata = {
  name: "The Tent",
  displayName: "The Tent - VIP Festival Experience",
  bundleId: "club.thetent.app",
  version: "1.0.0",
  build: "1",
  category: "Lifestyle",
  description: "Exclusive VIP hospitality services for artists performing at major music festivals.",
  keywords: "music festival, VIP, hospitality, artist services, luxury, festival experience, concierge, entertainment",
  supportEmail: "hello@thetent.club",
  privacyPolicy: "https://thetent.club/privacy",
  termsOfService: "https://thetent.club/terms",
  website: "https://thetent.club",
  
  // App Store specific
  appStoreInfo: {
    primaryLanguage: "English (U.S.)",
    contentRating: "4+",
    pricing: "Free",
    availability: "All countries/regions",
    
    // Required screenshots sizes
    screenshotRequirements: {
      "iPhone 6.7": "1290 x 2796 pixels", // iPhone 14 Pro Max
      "iPhone 6.1": "1179 x 2556 pixels", // iPhone 14
      "iPhone 5.5": "1242 x 2208 pixels", // iPhone 8 Plus
      "iPad Pro 12.9": "2048 x 2732 pixels"
    }
  }
};

// Create app metadata file
fs.writeFileSync(
  path.join(fullPackageDir, 'app-metadata.json'),
  JSON.stringify(appMetadata, null, 2)
);

// Create deployment checklist
const deploymentChecklist = `# The Tent - App Store Deployment Checklist

## ✅ Pre-Submission Checklist

### 1. App Identity
- [x] Bundle ID: club.thetent.app
- [x] App Name: The Tent
- [x] Display Name: The Tent - VIP Festival Experience
- [x] Version: 1.0.0
- [x] Build Number: 1

### 2. App Store Connect Setup
- [ ] Create app record in App Store Connect
- [ ] Configure app information
- [ ] Add app description and keywords
- [ ] Upload app icon (1024x1024px)
- [ ] Add screenshots (see requirements below)
- [ ] Set pricing (Free)
- [ ] Configure availability

### 3. Required Screenshots
- [ ] iPhone 6.7" (1290 x 2796): 3-10 screenshots
- [ ] iPhone 6.1" (1179 x 2556): 3-10 screenshots  
- [ ] iPhone 5.5" (1242 x 2208): 3-10 screenshots
- [ ] iPad Pro 12.9" (2048 x 2732): 3-10 screenshots

### 4. App Store Information
- [ ] App description (see app-store-description.txt)
- [ ] Keywords: ${appMetadata.keywords}
- [ ] Privacy Policy URL: ${appMetadata.privacyPolicy}
- [ ] Support URL: ${appMetadata.website}
- [ ] Marketing URL: ${appMetadata.website}

### 5. Build & Upload
- [ ] Open iOS project in Xcode
- [ ] Configure signing & provisioning
- [ ] Archive app (Product → Archive)
- [ ] Upload to App Store Connect
- [ ] Submit for review

## 📱 Next Steps

1. **Open the iOS project:**
   - Navigate to: ios/App/App.xcodeproj
   - Double-click to open in Xcode

2. **Configure signing:**
   - Select your Apple Developer Team
   - Enable "Automatically manage signing"

3. **Build & Archive:**
   - Select "Any iOS Device" or connected device
   - Product → Archive
   - Upload to App Store Connect

## 📞 Support
- Email: ${appMetadata.supportEmail}
- Website: ${appMetadata.website}

## ⚡ Quick Commands
\`\`\`bash
# Build web app
npm run build:client

# Sync with iOS
npm run mobile:sync

# Open iOS project
npm run mobile:ios
\`\`\`
`;

fs.writeFileSync(path.join(fullPackageDir, 'DEPLOYMENT_CHECKLIST.md'), deploymentChecklist);

// Create App Store description
const appStoreDescription = `The Tent provides exclusive VIP hospitality services for artists performing at major music festivals.

🎪 PREMIUM FESTIVAL SERVICES
• Priority access to exclusive amenities
• Dedicated personal concierge services
• Luxury grooming and wellness facilities
• Private lounge access
• Professional styling services
• Seamless festival coordination

🎵 ARTIST-FOCUSED FEATURES
• Easy registration and verification
• Real-time service booking
• Festival schedule management
• Exclusive brand partnerships
• Mobile-optimized dashboard

The Tent transforms your festival experience from stressful to seamless. Our white-glove service ensures you can focus on your performance while we handle everything else.

PERFECT FOR:
✓ Touring musicians and artists
✓ Festival performers
✓ Music industry professionals
✓ VIP festival experiences

Join the exclusive community of artists who trust The Tent for their festival hospitality needs.

UPCOMING FESTIVALS:
• Lollapalooza - Chicago, IL
• Riot Fest - Chicago, IL  
• Sea.Hear.Now - Asbury Park, NJ
• Country Calling - Ocean City, MD

Experience the difference that luxury hospitality makes. Download The Tent today and elevate your festival experience.`;

fs.writeFileSync(path.join(fullPackageDir, 'app-store-description.txt'), appStoreDescription);

// Create build instructions
const buildInstructions = `# iOS Build Instructions

## Prerequisites
1. macOS (required for iOS development)
2. Xcode 14+ (from Mac App Store)
3. Apple Developer Account ($99/year)

## Step-by-Step Build Process

### 1. Prepare the Project
\`\`\`bash
# Build the web application
npm run build:client

# Sync with iOS platform
npm run mobile:sync
\`\`\`

### 2. Open in Xcode
\`\`\`bash
# Open the iOS project
npm run mobile:ios
\`\`\`
Or manually open: \`ios/App/App.xcodeproj\`

### 3. Configure Project in Xcode

#### App Identity
- Bundle Identifier: \`club.thetent.app\`
- Display Name: \`The Tent\`
- Version: \`1.0.0\`
- Build: \`1\`

#### Signing & Capabilities
1. Select your Apple Developer Team
2. Enable "Automatically manage signing"
3. Ensure bundle ID matches your App Store Connect app

#### Deployment Info
- Deployment Target: iOS 13.0
- Supported Device Families: iPhone, iPad
- Supported Interface Orientations: Portrait

### 4. Build & Archive

1. **Select Build Target**
   - Choose "Any iOS Device (arm64)" or connected device
   - Do NOT use Simulator for App Store builds

2. **Archive the App**
   - Product → Archive
   - Wait for build to complete

3. **Upload to App Store**
   - Window → Organizer
   - Select your archive
   - Click "Distribute App"
   - Choose "App Store Connect"
   - Upload

### 5. App Store Connect

1. **Create App Record** (if not done)
   - Go to App Store Connect
   - My Apps → + → New App
   - Platform: iOS
   - Name: The Tent
   - Bundle ID: club.thetent.app

2. **Complete App Information**
   - Add app description
   - Upload screenshots
   - Set pricing (Free)
   - Add privacy policy URL

3. **Submit for Review**
   - Select your uploaded build
   - Complete all required fields
   - Submit for review

## Troubleshooting

### Common Issues
- **Signing errors**: Ensure Apple Developer account is active
- **Missing provisioning profile**: Let Xcode manage automatically
- **Build errors**: Clean build folder (Product → Clean Build Folder)

### Support
- Apple Developer Documentation: https://developer.apple.com/documentation/
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
`;

fs.writeFileSync(path.join(fullPackageDir, 'BUILD_INSTRUCTIONS.md'), buildInstructions);

// Create icon requirements file
const iconRequirements = `# App Icon Requirements

## Required Sizes

### App Store
- **App Store Icon**: 1024×1024px (PNG, no transparency)

### iOS App Bundle
- **iPhone App**: 60×60px, 120×120px, 180×180px
- **iPad App**: 76×76px, 152×152px
- **App Store**: 1024×1024px
- **Spotlight**: 40×40px, 80×80px, 120×120px
- **Settings**: 29×29px, 58×58px, 87×87px

## Design Guidelines
- Use your SVG source: resources/icon.svg
- Ensure icon works at all sizes
- No transparency in final PNG files
- Follow Apple's Human Interface Guidelines

## Auto-Generation
Icons are automatically generated from resources/icon.svg when you run:
\`\`\`bash
npm run mobile:sync
\`\`\`

## Manual Generation
If you need to generate icons manually:
1. Export resources/icon.svg at 1024×1024px
2. Use online tools like appicon.co or Xcode's asset catalog
3. Replace files in ios/App/App/Assets.xcassets/AppIcon.appiconset/
`;

fs.writeFileSync(path.join(fullPackageDir, 'ICON_REQUIREMENTS.md'), iconRequirements);

// Copy essential files if they exist
const filesToCopy = [
  { src: 'capacitor.config.ts', dest: 'capacitor.config.ts' },
  { src: 'app-config.json', dest: 'app-config.json' },
  { src: 'resources/icon.svg', dest: 'resources/icon.svg' },
  { src: 'resources/splash.svg', dest: 'resources/splash.svg' },
  { src: 'MOBILE_APP.md', dest: 'MOBILE_APP.md' }
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file.src)) {
    const destDir = path.dirname(path.join(fullPackageDir, file.dest));
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(file.src, path.join(fullPackageDir, file.dest));
    console.log(`✅ Copied ${file.src}`);
  }
});

// Create ZIP preparation script
const zipScript = `#!/bin/bash
# Create downloadable ZIP package

PACKAGE_DIR="${fullPackageDir}"
ZIP_NAME="the-tent-appstore-${timestamp}.zip"

echo "📦 Creating ZIP package..."

if command -v zip &> /dev/null; then
    zip -r "\$ZIP_NAME" "\$PACKAGE_DIR"
    echo "✅ Package created: \$ZIP_NAME"
    echo "📲 You can now download this file for App Store submission"
else
    echo "❌ ZIP command not found. Please manually compress the \$PACKAGE_DIR folder"
fi
`;

fs.writeFileSync(path.join(fullPackageDir, 'create-zip.sh'), zipScript);
fs.chmodSync(path.join(fullPackageDir, 'create-zip.sh'), 0o755);

// Create final README
const packageReadme = `# The Tent - App Store Deployment Package
Generated: ${new Date().toISOString()}

## 📁 Package Contents

- \`app-metadata.json\` - Complete app information and metadata
- \`DEPLOYMENT_CHECKLIST.md\` - Step-by-step deployment checklist
- \`BUILD_INSTRUCTIONS.md\` - Detailed Xcode build instructions
- \`app-store-description.txt\` - Ready-to-use App Store description
- \`ICON_REQUIREMENTS.md\` - App icon specifications
- \`resources/\` - App icons and splash screens
- \`capacitor.config.ts\` - Mobile app configuration

## 🚀 Quick Start

1. **Build the app:**
   \`\`\`bash
   npm run build:client
   npm run mobile:sync
   \`\`\`

2. **Open iOS project:**
   \`\`\`bash
   npm run mobile:ios
   \`\`\`

3. **Follow the checklist:**
   Open \`DEPLOYMENT_CHECKLIST.md\` and follow each step

## 📱 Your App Details

- **Name**: ${appMetadata.name}
- **Bundle ID**: ${appMetadata.bundleId}
- **Version**: ${appMetadata.version}
- **Category**: ${appMetadata.category}

## 📞 Need Help?

- Email: ${appMetadata.supportEmail}
- Website: ${appMetadata.website}

Ready to submit to the App Store! 🎉
`;

fs.writeFileSync(path.join(fullPackageDir, 'README.md'), packageReadme);

console.log(`✅ App Store deployment package created: ${fullPackageDir}/`);
console.log('\n📋 Package includes:');
console.log('   • Complete deployment checklist');
console.log('   • Step-by-step build instructions');
console.log('   • App Store description and metadata');
console.log('   • Icon requirements and assets');
console.log('   • Configuration files');

console.log('\n🚀 Next steps:');
console.log(`   1. Review the contents of ${fullPackageDir}/`);
console.log('   2. Follow DEPLOYMENT_CHECKLIST.md');
console.log('   3. Open the iOS project with: npm run mobile:ios');
console.log('   4. Build and upload to App Store Connect');

console.log('\n📦 To create a ZIP for easy sharing:');
console.log(`   cd ${fullPackageDir} && ./create-zip.sh`);

console.log('\n🎪 Ready to launch The Tent on the App Store!');
