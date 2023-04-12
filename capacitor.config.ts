import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.krishig.app',
  appName: 'krishig',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{
    url:'http://localhost:80'
  }
};

export default config;
