const path = require('path')
console.log(path.sep)
const filepath = path.join('/content/','subfolder','test.txt')
console.log(filepath)
//root basename
const base = path.basename(filepath)
console.log(base)
//extension name
console.log(path.extname(filepath))
//absolute path of module or folder
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)