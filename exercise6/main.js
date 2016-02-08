const makeitmodular = require("./makeitmodular.js")



makeitmodular(process.argv[2], process.argv[3], function(err,files){

  if(err){
    console.error('Error');
  }
  else {
    for(var i = 0; i < files.length; i ++){
      console.log(files[i])//print file on new line
    }
  }

})
