#!/bin/bash

# The Tent Mobile App Deployment Script
# This script automates the build and deployment process for both iOS and Android

set -e

echo "🚀 Starting mobile app deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "Checking dependencies..."

# Check if Capacitor is installed
if ! command -v npx &> /dev/null; then
    print_error "npm/npx is required but not installed."
    exit 1
fi

# Check for mobile platforms
if [ ! -d "ios" ] && [ ! -d "android" ]; then
    print_warning "No mobile platforms found. Adding platforms..."
    npx cap add ios
    npx cap add android
fi

print_status "Building web application..."

# Build the client application
npm run build:client

if [ $? -eq 0 ]; then
    print_success "Web build completed successfully"
else
    print_error "Web build failed"
    exit 1
fi

print_status "Syncing with mobile platforms..."

# Sync with Capacitor
npx cap sync

if [ $? -eq 0 ]; then
    print_success "Mobile sync completed successfully"
else
    print_error "Mobile sync failed"
    exit 1
fi

# Check command line arguments
PLATFORM=${1:-""}

case $PLATFORM in
    "ios")
        print_status "Opening iOS project in Xcode..."
        npx cap open ios
        print_success "iOS project opened. Complete the build in Xcode."
        ;;
    "android")
        print_status "Opening Android project in Android Studio..."
        npx cap open android
        print_success "Android project opened. Complete the build in Android Studio."
        ;;
    "both"|"")
        print_status "Preparing both platforms..."
        print_warning "iOS platform ready. Run 'npx cap open ios' to open in Xcode."
        print_warning "Android platform ready. Run 'npx cap open android' to open in Android Studio."
        ;;
    *)
        print_error "Invalid platform specified. Use 'ios', 'android', or 'both'."
        exit 1
        ;;
esac

print_success "Mobile app deployment preparation completed!"

echo ""
echo "📱 Next Steps:"
echo "1. For iOS: Open Xcode, configure signing, and archive for App Store"
echo "2. For Android: Open Android Studio, generate signed AAB for Play Store"
echo "3. Upload to respective app stores"
echo ""
echo "📚 Documentation:"
echo "- iOS Guide: ios-deployment.md"
echo "- Android Guide: android-deployment.md"
echo ""
print_success "Happy deploying! 🎉"
