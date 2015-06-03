var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ret = [];
  ret.push("path.normalize('/foo/bar//baz/asdf/quux/..')-->"+path.normalize('/foo/bar//baz/asdf/quux/..'));
  ret.push("path.join('/foo2', 'bar', 'baz/asdf', 'quux', '..')-->"+path.join('/foo2', 'bar', 'baz/asdf', 'quux', '..'));
  ret.push("path.dirname('aa/bb')-->"+path.dirname('aa/bb'));
  res.send(ret.join('<br>'));
});

module.exports = router;
