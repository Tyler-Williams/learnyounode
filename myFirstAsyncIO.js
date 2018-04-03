const fs = require('fs');
const path = process.argv[2];

function printNewLineCount(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const fileContents = data.toString();
    const newLineCount = fileContents.split('\n').length -1;
    console.log(newLineCount);
  });
}

printNewLineCount(path);
