
const babelRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
}

module.exports = [
  babelRule,
]
