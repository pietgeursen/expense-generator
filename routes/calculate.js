var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("calculate")
});

router.post('/', function(req, res) {
  console.log(req.body);
})

module.exports = router;
