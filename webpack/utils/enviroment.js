const env = process.env.NODE_ENV
const isProd = env !== 'development'

module.exports = {
  isProd
}