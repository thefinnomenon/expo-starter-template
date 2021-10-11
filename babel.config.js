module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@/api': './src/api',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/hooks': './src/hooks',
            '@/i18n': './src/i18n',
            '@/navigation': './src/navigation',
            '@/providers': './src/providers',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/styles': './src/styles',
            '@/utilities': './src/utilities',
          },
        },
      ],
    ],
  };
};
