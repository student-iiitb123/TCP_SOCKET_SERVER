const net = require('net');

const server = net.createServer((socket) => {
    console.log("client Connected");

   console.log("Client IP:", socket.remoteAddress);
    console.log("Client Port:", socket.remotePort);

    socket.on('data',(data) => {
         console.log("Client says:", data.toString());
    })

    socket.on('end',() => {
            console.log("Client Disconnected");
    })
})

server.listen(5000,() => {
      console.log("Socket Server running on port 5000");
})