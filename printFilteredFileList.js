const path = process.argv[2];
const extention = process.argv[3];
const getList = require('./getFilteredFileList.js');

function printList(err, data) {
  if (err) throw(err);    
  console.log(data.join('\n'));
}

getList(path, extention, printList);