const path = require('path')
const rules = require('./partials/rules')
const buildConfigs = require('./partials/build-configs')
const devServer = require('./partials/dev-server')
const { rootPath } = require('./utils/paths')

module.exports = {
  entry: [
    path.join(rootPath, 'index.js'),
  ],
  module: {
    rules,
  },
  plugins: [],
  optimization: {},
  devServer,
  ...buildConfigs,
}
