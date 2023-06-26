// GLOBALS - NO WINDOW (NO BROWSER)
//__dirname - path to current directory
//__filename - file name
// module - info about current module (file)
// require - functiom to use modules (CommonJS)
// process - info about env where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log('hello world')
},1000)