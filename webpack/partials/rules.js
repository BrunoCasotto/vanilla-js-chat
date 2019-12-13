const rules = []

rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
})

module.exports = rules
