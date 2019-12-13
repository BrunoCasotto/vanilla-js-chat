const path = require('path')
const { rootPath } = require('./../utils/paths')
const { isDev } = require('./../utils/enviroment')

const entry = []
entry.push(path.join(rootPath, 'index.js'))

if(isDev) {
  entry.push(path.join(rootPath, 'index.html'))
}

module.exports = entry