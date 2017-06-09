var express = require('express');
var path = require('path');//路径解析
var app = express();
var jkrouter = require('jkrouter');
var routers = path.join(__dirname, 'routers');
console.log(routers)
jkrouter(app,routers);
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
