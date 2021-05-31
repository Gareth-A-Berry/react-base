const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@store': path.resolve(__dirname, './src/shared/store'),
      '@factories': path.resolve(__dirname, './src/shared/factories'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@redux': path.resolve(__dirname, './src/shared/redux'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
      '@config': path.resolve(__dirname, './src/shared/config'),
      '@setup': path.resolve(__dirname, './src/setup'),
      '@routes': path.resolve(__dirname, './src/shared/routes'),
      '@validation': path.resolve(__dirname, './src/shared/utils/validation'),
      '@sass': path.resolve(__dirname, './src/sass'),
      '@hocs': path.resolve(__dirname, './src/shared/higher-order-components'),
    },
  },
}
