const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rules = []

rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
})

rules.push({
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
})

module.exports = rules
