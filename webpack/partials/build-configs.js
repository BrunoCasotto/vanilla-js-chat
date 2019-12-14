// Basic webpack configs to build or watch
const { isProd, isDev } = require('./../utils/enviroment')

const mode = isProd ? 'production' : 'development'
const watch = isDev
const devTool = isDev ? 'source-map' : 'hidden-source-map'

module.exports = {
  mode,
  watch,
  devtool,
}
