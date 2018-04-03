const port = process.argv[2];
const map = require('through2-map');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('POST request only!\n');
  }
  
  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
});

server.listen(port);