const fs = require('fs');

module.exports = function (dirName, extention, callback) {
  fs.readdir(dirName, (err, data) => {
    if (err) {return callback(err, null);}
    const filteredList = data.filter((item) => item.endsWith(`.${extention}`));
    return callback(null, filteredList);
  })
}