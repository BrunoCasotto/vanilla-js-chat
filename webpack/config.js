const rules = require('./partials/rules')
const buildConfigs = require('./partials/build-configs')
const plugins = require('./partials/plugins')
const entry = require('./partials/entry')
const devServer = require('./partials/dev-server')
const output = require('./partials/output')

module.exports = {
  entry,
  output,
  module: {
    rules,
  },
  plugins,
  devServer,
  ...buildConfigs,
}
