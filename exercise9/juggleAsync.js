// const http = require('http'),
// urls = [process.argv[4],process.argv[3],process.argv[2]],
// bl = require('bl')

//
// urls.map(function(url){
//   http.get(url,(res)=>{
//     res.pipe(bl((err,data)=>{
//       if(err)
//         return console.error(err)
//       console.log(data.toString())
//     }))
//   })
// })

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
