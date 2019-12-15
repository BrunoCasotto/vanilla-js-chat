const path = require('path')
const { isDev } = require('./../utils/enviroment')
const { rootPath, stylePath } = require('./../utils/paths')

const entry = []

entry.push(path.join(rootPath, 'src', 'index.js'))
entry.push(path.join(stylePath, 'index.scss'))

if(isDev) {
  entry.push(path.join(stylePath, 'example.scss'))
}

module.exports = entry