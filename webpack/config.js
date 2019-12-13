const path = require('path')
const { rootPath } = require('./partials/paths')
// const optimization = require('./partials/optimization')
const rules = require('./partials/rules')

module.exports = {
  entry: [
    path.join(rootPath, 'index.js'),
  ],
  module: {
    rules,
  },
  plugins: [],
  optimization: {},
}
