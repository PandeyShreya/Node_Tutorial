//Synchronous method

const {readFileSync, writeFileSync}=require('fs')
// const fs = require('fs')
// fs.read()

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)
//to write on file
writeFileSync('./content/result.txt',`Here is the result: ${first},${second}`)
//{flag:'a'} is used to append
writeFileSync('./content/result.txt',`Here is the result: ${first},${second}`,{flag:'a'})