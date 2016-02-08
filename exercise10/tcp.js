const net = require('net')

function zeroFill(i){
  //if number is 0-9 , put a zero infront
  return (i < 10 ? '0' : '') + i
}
const server = net.createServer((socket)=>{
  var date = new Date()

  socket.write(date.getFullYear() +'-' + zeroFill(date.getMonth()+1)+'-'+zeroFill(date.getDate())+' '+ zeroFill(date.getHours())+':'+zeroFill(date.getMinutes()) +'\n')
  socket.end()
})
server.listen(process.argv[2])
