const fs = require('fs');
const directory = process.argv[2];
const extention = `.${process.argv[3]}`;


function filteredLS() {
  fs.readdir(directory,(err, data) => {
    if (err) throw(err);
    const filteredList = data.filter((item) => item.endsWith(extention)).join('\n');
    console.log(filteredList);
  });
}

filteredLS();