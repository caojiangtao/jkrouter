var router = require('express').Router();
router.get('/', function(req, res, next) {
  res.send('这是一个测试');
});

module.exports = router;
