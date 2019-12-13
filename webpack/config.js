const path = require('path')
const rules = require('./partials/rules')
const buildConfigs = require('./partials/build-configs')
const { rootPath } = require('./partials/paths')

module.exports = {
  entry: [
    path.join(rootPath, 'index.js'),
  ],
  module: {
    rules,
  },
  plugins: [],
  optimization: {},
  ...buildConfigs,
}
