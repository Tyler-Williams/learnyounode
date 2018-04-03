const fs = require('fs');
const path = process.argv[2];
const fileContents = fs.readFileSync(path).toString();
const newLineTotal = fileContents.split('\n').length -1;

console.log(newLineTotal);