module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'app-info-package': ['./_app-info-package'],
          'conic-gradient-package': ['./_conic-gradient-package'],
          'save-file-picker-package': ['./_save-file-picker-package'],
          'react-native-detect-maestro': ['./_is_maestro'],
          'screen-orientation-package': ['./_screen-orientation-package'],
          'react-native-widget-picker': ['./_widget-picker'],
        },
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
