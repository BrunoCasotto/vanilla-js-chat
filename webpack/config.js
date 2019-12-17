const rules = require('./partials/rules')
const buildConfigs = require('./partials/build-configs')
const plugins = require('./partials/plugins')
const entry = require('./partials/entry')
const devServer = require('./partials/dev-server')
const output = require('./partials/output')

const configs = [
  {
    libraryTarget: 'commonjs2',
    filename: 'vanillaJsChat.js'
  },
  {
    libraryTarget: 'window',
    filename: 'vanillaJsChat.min.js',
  }
]

module.exports = configs.map( config => ({
  entry,
  output: output(config),
  module: {
    rules,
  },
  plugins,
  devServer,
  ...buildConfigs,
}))
