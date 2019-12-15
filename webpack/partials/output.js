const path = require('path')
const { rootPath } = require('./../utils/paths')

module.exports = {
  filename: 'bundle.js',
  path: path.join(rootPath, 'dist'),
  publicPath: 'dist',
  library: 'VanillaJsChat',
  libraryTarget: 'window'
}
