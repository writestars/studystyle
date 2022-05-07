var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const point = parseInt(req.query.point);
  res.render('question2',{point:point});
});

module.exports = router;
