const path = require('path')
const { rootPath } = require('./../utils/paths')
const { isProd } = require('./../utils/enviroment')

const historyApiFallback = {
  disableDotRule: true,
  index: path.join(rootPath, 'index.html')
}

const devServer = !isProd ? {
  contentBase: path.join(rootPath, 'dist'),
  compress: true,
  port: 9000,
  historyApiFallback,
} : {}

module.exports = devServer
