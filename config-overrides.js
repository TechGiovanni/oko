const { aliasWebpack, aliasJest } = require('react-app-alias');

const aliasMap = {
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@hooks': 'src/hooks',
  '@mocks': 'src/mocks',
  '@pages': 'src/pages',
  '@redux': 'src/redux-toolkit',
  '@routes': 'src/routes',
  '@services': 'src/services',
  '@utils': 'src/utils',
  '@root': 'src'
};

const options = {
  alias: aliasMap
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
