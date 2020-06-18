const myPath = require('path')
const { dirname } = require('path')

const filename = myPath.dirname(__filename)
console.log(filename)

const extenstion = myPath.extname(__filename)
console.log(extenstion)

const basename = myPath.basename(__filename)
console.log(basename)

const newPath = myPath.join(__dirname, 'css', 'index.css')
console.log(newPath)