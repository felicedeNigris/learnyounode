var fs = require('fs')



  //prints number of newlines
console.log(fs.readFileSync(process.argv[2],'utf8').split('\n').length-1)
