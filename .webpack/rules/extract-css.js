import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[local]--[hash:base64:5]',
        },
        sourceMap: true,
        localsConvention: 'camelCase',
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
}
