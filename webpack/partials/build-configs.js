// Basic webpack configs to build or watch
const env = process.env.NODE_ENV
const mode = env !== 'production' ? 'development' : 'production'
const watch = env === 'development' ? true : false

module.exports = {
  mode,
  watch,
}
