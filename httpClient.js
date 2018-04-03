const url = process.argv[2];
const http = require('http');

function printData(data) {
  console.log(data);
}

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('error', (err) => {
    throw(err);
  });
  res.on('data', (data) => {
    printData(data);
  });
  res.on('end', () => {
    return
  });
});