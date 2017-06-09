var express = require('express');
var path = require('path');//路径解析
var app = express();
var jkrouter = equire('jkrouter');
var routers = path.join(__dirname, 'routers');
jkrouter(app,controllers);
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
