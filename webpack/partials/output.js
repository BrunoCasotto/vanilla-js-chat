const path = require('path')
const { rootPath } = require('./../utils/paths')

module.exports = ({ libraryTarget, filename }) => ({
  filename,
  path: path.join(rootPath, 'dist'),
  publicPath: 'dist',
  library: 'VanillaJsChat',
  libraryTarget,
})
