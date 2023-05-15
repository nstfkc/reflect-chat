import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.reflect.app',
  appName: 'Reflect Chat',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
