

//write an integer to console representing the # of characters recieved from the server
// Second return a line containing the complete string of characters sent by the server
const http = require('http'),
bl = require('bl'), //buffer list
url = process.argv[2],
fs = require('fs')

http.get(url,(res)=>{
  res.pipe(bl((err,data)=>{
    if(err)
      return console.error(err)
    console.log(data.length)
    console.log(data.toString())
  }))
})
