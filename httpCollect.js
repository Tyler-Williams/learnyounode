const url = process.argv[2];
const http = require('http');

http.get(url, (res) => {
  res.setEncoding('utf8');
  let data = '';

  res.on('error', (err) => {
    throw(err);
  });
  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {
    printData(data);
  });
});

function printData(data){
  console.log(data.length);
  console.log(data);
}