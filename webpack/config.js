const path = require('path')
const rules = require('./partials/rules')
const buildConfigs = require('./partials/build-configs')
const plugins = require('./partials/plugins')
const entry = require('./partials/entry')
const devServer = require('./partials/dev-server')

const { rootPath } = require('./utils/paths')

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    path: path.join(rootPath, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules,
  },
  plugins,
  devServer,
  ...buildConfigs,
}
