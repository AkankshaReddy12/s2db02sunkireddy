var express = require('express');
var router = express.Router();
const shoe_controlers= require('../controllers/shoe');

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', shoe_controlers.shoe_view_all_Page );
  res.render('shoe', { title: 'Search Results by shoe' });
});

module.exports = router;
