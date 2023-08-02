const path = require('path');

module.exports = {
  dependencies: {
    'app-info-package': {
      root: path.resolve(__dirname, './_app-info-package'),
    },
    'conic-gradient-package': {
      root: path.resolve(__dirname, './_conic-gradient-package'),
    },
    'save-file-picker-package': {
      root: path.resolve(__dirname, './_save-file-picker-package'),
    },
    'react-native-detect-maestro': {
      root: path.resolve(__dirname, './_is_maestro'),
    },
    'screen-orientation-package': {
      root: path.resolve(__dirname, './_screen-orientation-package'),
    },
    'react-native-widget-picker': {
      root: path.resolve(__dirname, './_widget-picker'),
    },
    'range-slider-package': {
      root: path.resolve(__dirname, './_range-slider-package'),
    },
  },
};
