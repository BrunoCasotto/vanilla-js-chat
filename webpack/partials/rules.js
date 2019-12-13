const { isDev } = require('./../utils/enviroment')
const rules = []

rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
})

if(isDev) {
  rules.push({
    test: /\.(html)$/,
    use: [
      'file-loader',
      'extract-loader',
      {
        loader: "html-loader",
      }
    ],
  })
}

module.exports = rules
