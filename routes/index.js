var express = require('express');
var router = express.Router();
const Model = require('../models/Country');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    page: 'home',
    title: 'Home - C19-Trace',
  });
});

router.get('/about', function(req, res, next) {
  res.render('layout', {
    page: 'about',
    title: 'About - C19-Trace',
  });
});

router.get('/explore', function(req, res, next) {
  res.render('layout', {
    page: 'explore',
    title: 'Explore - C19-Trace',
  });
});

router.post('/list', function(req, res, next) {
  res.render('list');
});

router.get('/vista', function(req, res, next) {
  res.render('nvista');
});
// router.get('/*', function(req, res, next) {
//   res.render('404', { title: 'Express' });
// });

module.exports = router;
