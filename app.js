var express = require('express');
var http = require('http');

var indexRouter = require('./routes/index');

var app = express();
app.use('/', indexRouter);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port,function(){
  console.log(`> ctrl + 单击  http://localhost:${port}`)
});


function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}