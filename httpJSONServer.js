const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('GET resquest only! \n');
  }
  const endpoint = url.parse(req.url).pathname;
  const query = url.parse(req.url).query;
  console.log(endpoint);
  if (endpoint == '/api/parsetime'){
    res.end(isoToJSON(query));
  }
  else if (endpoint == '/api/unixtime') {
    res.end(isoToUnix(query))
  }
  else {
    return res.end(`INVALID REQUEST(${query}); Only unixtime or parsetime`)
  }
});

function isoToJSON (isoString) {  
  return JSON.stringify(isoTimetoObj(isoString, true));
}

function isoToUnix (isoString) {
  // const dateTime = isoTimetoObj(isoString, false)
  // const newDateTime = new Date(dateTime);
  const unixtime = {
    "unixtime" : Date.parse(isoString.slice(isoString.indexOf('=') + 1))
  };
  return JSON.stringify(unixtime);
}

function isoTimetoObj (isoString, timeOnly) {
  const nowDate = new Date();

  const dateArr = isoString.slice(isoString.indexOf('=') + 1, isoString.indexOf('T')).split('-');
  const year = parseInt(dateArr[0]);
  const month = parseInt(dateArr[1]);
  const day = parseInt(dateArr[2]);

  const timeArr = isoString.slice(isoString.indexOf('T') + 1).split(':');
  const hour = timeArr[0] - (nowDate.getTimezoneOffset() / 60);
  const minute = parseInt(timeArr[1]);
  const second = parseInt(timeArr[2]);

  const date = {
    "year" : year,
    "month" : month,
    "date" : day    
  };

  const time = {
    "hour": hour,
    "minute": minute,
    "second": timeOnly ? second : timeArr[2]
  };

  const dateTime = Object.assign({}, date, time) 

  return timeOnly ? time : dateTime;
}

server.listen(port);