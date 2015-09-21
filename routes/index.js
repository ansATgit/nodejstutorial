var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET layout1 page. */
router.get('/layout1', function(req, res, next) {
  res.render('layout1', { title: 'Layout 1' });
});

module.exports = router;
