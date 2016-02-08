


module.exports = function(dirname, fileext, callback){
  const fs = require('fs')
  const path = require('path')

  // var dirname = process.argv[2]
  // var fileext = process.argv[3]

  var filelist = []

  fs.readdir(dirname, function(err,files){
    if(err){
      // console.error('error')
      return callback(err)
    }
    else{
      files.forEach(function(file){
        if(path.extname(file) === ("." + fileext)){
          filelist.push(file)
        }
      })
    }
    return callback(null,filelist)
  })
}//end function


//just filtering function

//directory
