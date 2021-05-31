import path from 'path'
import ResourceHintWebpackPlugin from 'resource-hints-webpack-plugin'
import { babel_loader, glob_loader, sass_resources, extract_css, file_loader } from './rules'
import {
  md5_hash,
  html_webpack,
  extract_css_plugin,
  define,
  compression_webpack,
  script_ext_html_webpack,
} from './plugins'

export default {
  mode: 'production',
  devtool: '',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'static/js/bundle.[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.test'],
    modules: ['node_modules', path.resolve(__dirname, '../src/shared')],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 100,
      maxInitialRequests: 100,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 10000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    md5_hash(),
    compression_webpack(),
    html_webpack(true),
    new ResourceHintWebpackPlugin(),
    extract_css_plugin(),
    script_ext_html_webpack(),
    define('production'),
  ],
  module: { rules: [babel_loader, glob_loader, file_loader, extract_css, sass_resources] },
}
