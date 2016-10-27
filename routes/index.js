var express = require('express');
var router = express.Router();

/* GET requests. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Documentation'
  });
});

router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About us'
  });
});

router.get('/color', function (req, res, next) {
  res.render('color', {
    title: 'Color Palette'
  });
});

router.get('/licens', function (req, res, next) {
  res.render('licens', {
    title: 'Licenses'
  });
});

router.get('/materialize', function (req, res, next) {
  res.render('materialize', {
    title: 'About MaterializeCSS'
  });
});

module.exports = router;