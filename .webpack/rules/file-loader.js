export default {
  test: /\.(png|jpg|gif)$/i,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
}
