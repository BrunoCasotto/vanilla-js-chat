const path = require('path')
const { rootPath } = require('./../utils/paths')
const { isDev } = require('./../utils/enviroment')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  })
]

if(isDev) {
  plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'index.html')
    })
  )
}



module.exports = plugins