const path = require('path')
const { rootPath } = require('./../utils/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(rootPath, 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: 'style.css',
  })
]

module.exports = plugins