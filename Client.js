const net = require('net');

 const client = net.createConnection({
    port:5000,host:'localhost'},
() => {
     console.log("Connected to Server");

     client.write("hello Server");

}
);

client.on('data', (data) => {
      console.log("Server says:", data.toString());
})

client.on('end', () => {
    console.log("Disconnected from server");
});