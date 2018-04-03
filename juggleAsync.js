const urlList = process.argv.slice(2);
const http = require('http');
let results = [];

function httpGet(url, index) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    let data = '';

    res.on('error', (err) => {
      throw(err);
    });
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      results[index] = data;
      if (results.length == urlList.length)
      {
        printResults();
      }
    });
  });
}

function printResults() {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

for (let i = 0; i < urlList.length; i++){
  httpGet(urlList[i], i);
}