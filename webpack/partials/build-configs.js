// Basic webpack configs to build or watch
const { isProd, isDev } = require('./../utils/enviroment')

const mode = isProd ? 'production' : 'development'
const watch = isDev
const devtool = isDev ? 'source-map' : false

module.exports = {
  mode,
  watch,
  devtool,
}
