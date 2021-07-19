const net = require('net')

// net으로 서버 만들고 기본적으로 소켓 제공을 통해 연결
const server = net.createServer(socket => {
  socket.write("Hello")
  socket.on('data', data => {
    console.log(data.toString())
  })
})

server.listen(8080)