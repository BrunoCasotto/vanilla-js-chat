const path = require('path')
const { rootPath } = require('./../utils/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(rootPath, 'index.html')
  })
]

module.exports = plugins