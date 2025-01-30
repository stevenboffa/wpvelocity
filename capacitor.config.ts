import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pro.wpvelocity.app',
  appName: 'WPVelocity',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'https://ghkplojtidqvgmjxdnsm.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    backgroundColor: '#000000'
  }
};

export default config;