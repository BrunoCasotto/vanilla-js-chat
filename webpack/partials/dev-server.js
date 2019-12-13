const path = require('path')
const { rootPath } = require('./../utils/paths')
const { isDev } = require('./../utils/enviroment')

const devServer =  {
  contentBase: path.join(rootPath, 'dist'),
  compress: true,
  port: 8080,
}

module.exports = isDev ? devServer : {}
