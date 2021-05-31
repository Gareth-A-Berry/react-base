import path from 'path'
import serverConfig from './server/config'
import {
  hot_module_replacement,
  html_webpack,
  loader_options,
  define,
  extract_css_plugin,
} from './plugins'
import { babel_loader, extract_css, glob_loader, sass_resources, file_loader } from './rules'

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-warnings',
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, '../src/index.js'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.test'],
    modules: ['node_modules', path.resolve(__dirname, '../src/shared')],
  },
  devServer: serverConfig,
  plugins: [
    hot_module_replacement(),
    loader_options(),
    html_webpack(),
    extract_css_plugin(),
    define('development'),
  ],
  module: { rules: [babel_loader, glob_loader, file_loader, extract_css, sass_resources] },
}
