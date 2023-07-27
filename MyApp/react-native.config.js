const path = require('path');

module.exports = {
  dependencies: {
    'app-info-package': {
      root: path.resolve(__dirname, './_app-info-package'),
    },
    'conic-gradient-package': {
      root: path.resolve(__dirname, './_conic-gradient-package'),
    },
  },
};
