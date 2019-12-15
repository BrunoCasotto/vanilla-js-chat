const path = require('path')
const { isProd } = require('./../utils/enviroment')
const { rootPath } = require('./../utils/paths')

module.exports = {
  filename: isProd ? 'bundle.min.js' : 'bundle.js',
  path: path.join(rootPath, 'dist'),
  publicPath: 'dist'
}
