const path = require('path')
const { rootPath } = require('./../utils/paths')

const entry = []
entry.push(path.join(rootPath, 'index.js'))

module.exports = entry