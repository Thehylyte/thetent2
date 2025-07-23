/// <reference types="vite/client" />

// Capacitor global types for mobile app
declare global {
  interface Window {
    Capacitor?: {
      isNativePlatform(): boolean;
      getPlatform(): string;
    };
  }
}
