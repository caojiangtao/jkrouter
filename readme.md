## jkrouter
###  nodejs 以js文件名为路径分配路由
File/Folder as `path`, another router middleware for nodejs.

### Install

    npm Install jkrouter --save

### Usage

```
router(app, options)
```
- app: {Object} koa instance.
- options: {Object|String->root}
  - root: {String} router directory

### Example

**File tree**

```
├── app.js
├── package.json
├── ...
└── router
    ├── index.js
    │
    ├── user.js
    │
    ├── test.js
    └── links.js


```

```

**index.js**

```
var router = require('express').Router();
router.get('/index(.html)?', function(req, res, next) {
  res.send('这是一个测试');
});
module.exports = router;

```

**links.js**

```
var router = require('express').Router();
router.get('/', function(req, res, next) {
  res.send('这是一个link测试');
});

module.exports = router;

```

**app.js**

```
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



MIT
