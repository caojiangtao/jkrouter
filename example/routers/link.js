var router = require('express').Router();
router.get('/', function(req, res, next) {
  res.send('这是一个link测试');
});

module.exports = router;
