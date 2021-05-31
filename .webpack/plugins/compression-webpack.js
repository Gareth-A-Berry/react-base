import BrotliPlugin from 'brotli-webpack-plugin'

export default () =>
  new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  })
