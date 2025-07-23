// Mobile app initialization with conditional imports for web compatibility

// Check if we're in a Capacitor environment
const isCapacitorAvailable = () => {
  return typeof window !== 'undefined' && 
         window.Capacitor && 
         window.Capacitor.isNativePlatform && 
         window.Capacitor.isNativePlatform();
};

// Mobile app initialization
export const initializeMobileApp = async () => {
  // Early return for web environments
  if (!isCapacitorAvailable()) {
    console.log('🌐 Running in web environment - skipping mobile initialization');
    return;
  }

  console.log('🚀 Initializing mobile app...');

  try {
    // Dynamic imports only when in Capacitor environment
    const { Capacitor } = await import('@capacitor/core');
    const { SplashScreen } = await import('@capacitor/splash-screen');
    const { StatusBar, Style } = await import('@capacitor/status-bar');
    const { App } = await import('@capacitor/app');
    const { Keyboard } = await import('@capacitor/keyboard');
    const { Network } = await import('@capacitor/network');

    // Configure status bar
    if (Capacitor.getPlatform() === "ios") {
      await StatusBar.setStyle({ style: Style.Default });
    } else {
      await StatusBar.setBackgroundColor({ color: "#6366f1" });
    }

    // Configure splash screen
    await SplashScreen.hide();

    // Add app state listeners
    App.addListener("appStateChange", ({ isActive }) => {
      console.log("App state changed. Is active?", isActive);
    });

    // Add network status listener
    Network.addListener("networkStatusChange", (status) => {
      console.log("Network status changed", status);
    });

    // Configure keyboard behavior
    Keyboard.addListener("keyboardWillShow", (info) => {
      console.log("Keyboard will show with height:", info.keyboardHeight);
    });

    Keyboard.addListener("keyboardDidShow", (info) => {
      console.log("Keyboard shown with height:", info.keyboardHeight);
    });

    Keyboard.addListener("keyboardWillHide", () => {
      console.log("Keyboard will hide");
    });

    console.log("✅ Mobile app initialized successfully");
  } catch (error) {
    console.error("❌ Error initializing mobile app:", error);
  }
};

// Utility functions for mobile app
export const getMobileInfo = async () => {
  if (!isCapacitorAvailable()) {
    return null;
  }

  try {
    const { Capacitor } = await import('@capacitor/core');
    const { App } = await import('@capacitor/app');
    const { Network } = await import('@capacitor/network');

    const appInfo = await App.getInfo();
    const networkStatus = await Network.getStatus();

    return {
      platform: Capacitor.getPlatform(),
      appName: appInfo.name,
      appVersion: appInfo.version,
      appBuild: appInfo.build,
      isConnected: networkStatus.connected,
      connectionType: networkStatus.connectionType,
    };
  } catch (error) {
    console.error("Error getting mobile info:", error);
    return null;
  }
};

// Check if running in mobile app
export const isMobileApp = () => isCapacitorAvailable();

// Get platform-specific safe area information
export const getSafeAreaInfo = async () => {
  if (!isCapacitorAvailable()) {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }

  try {
    const { Capacitor } = await import('@capacitor/core');
    
    // For now, return standard safe areas
    // In a real app, you'd use the Safe Area plugin
    const platform = Capacitor.getPlatform();

    if (platform === "ios") {
      return { top: 44, bottom: 34, left: 0, right: 0 }; // Standard iPhone safe areas
    } else {
      return { top: 24, bottom: 0, left: 0, right: 0 }; // Standard Android status bar
    }
  } catch (error) {
    console.error("Error getting safe area info:", error);
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
};
