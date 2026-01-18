import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sunilk.razorpayTestApp',
  appName: 'razorpay-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
