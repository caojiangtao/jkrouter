## jkrouter

File/Folder as `path`, another router middleware for nodejs.

### Install

    npm i jkrouter --save

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
var indexModel = require('../models/indexModel');
router.get('/index(.html)?', indexModel.banner);
```

**links.js**

```
var router = require('express').Router();
router.get('/', function(req, res, next) {
  res.send('banner');
});
module.exports = router;
```

**app.js**

```
var express = require('express'),
var router = require('jkrouter');
var roters = path.join(__dirname, 'routes');
var app = express();
roters(app,roters);
app.listen(3000);



MIT