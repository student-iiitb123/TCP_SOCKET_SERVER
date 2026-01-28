const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  clients.push(socket);

  console.log(socket.name, "connected");
  broadcast(`${socket.name} joined the chat\n`, socket);

  socket.on('data', (data) => {
    broadcast(`${socket.name}: ${data}`, socket);
  });

  socket.on('end', () => {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(`${socket.name} left the chat\n`);
    console.log(socket.name, "disconnected");
  });

 socket.on('error', (err) => {
  if (err.code === 'ECONNRESET') {
    console.log(`${socket.name} disconnected abruptly`);
  } else {
    console.log("Socket error:", err.message);
  }
});

});

function broadcast(message, sender) {
  clients.forEach((client) => {
    if (client !== sender) {
      client.write(message);
    }
  });
}

server.listen(9000, () => {
  console.log("Chat server running on port 9000");
});
