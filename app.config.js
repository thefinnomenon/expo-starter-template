require('dotenv').config({ path: `./envs/.env.${process.env.NODE_ENV}` });

export default {
  expo: {
    name: 'expo-starter-template',
    slug: 'expo-starter-template',
    entryPoint: './index.js',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './src/assets/images/favicon.png',
    },
    extra: {
      env: process.env,
    },
  },
};
