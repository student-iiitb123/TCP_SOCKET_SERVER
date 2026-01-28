const net = require('net');
const readline = require('readline');

const client = net.createConnection(
  { host: '127.0.0.1', port: 9000 },
  () => {
    console.log("Connected to chat server");
  }
);

client.on('data', (data) => {
  process.stdout.write(data.toString());
});

client.on('end', () => {
  console.log("\nDisconnected from server");
});

client.on('error', (err) => {
  console.log("Client error:", err.message);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  client.write(input + "\n");
});
