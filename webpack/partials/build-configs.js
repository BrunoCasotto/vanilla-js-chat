// Basic webpack configs to build or watch
const { isProd } = require('./../utils/enviroment')

const mode = isProd ? 'production' : 'development'
const watch = !isProd

module.exports = {
  mode,
  watch,
}
