const path = require('path')
const { rootPath, stylePath } = require('./../utils/paths')

const entry = []

entry.push(path.join(rootPath, 'index.js'))
entry.push(path.join(stylePath, 'index.scss'))

module.exports = entry