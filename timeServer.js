const port = process.argv[2];
const net = require('net');

const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = makeTwoDigit(date.getMonth() +1);
  const day = makeTwoDigit(date.getDate());
  const hours = makeTwoDigit(date.getHours());
  const minutes = makeTwoDigit(date.getMinutes());

  socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`);
})

function makeTwoDigit (str) {
  return str < 9 ? `0${str}` : str;
}

server.listen(port);