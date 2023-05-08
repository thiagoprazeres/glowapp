import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.netlify.glowapp-staging',
  appName: 'glowapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
