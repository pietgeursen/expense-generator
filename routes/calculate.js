var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  res.render("calculate")
});

router.post('/', function(req, res) { //recieves form submission
  console.log(req.body);
  var dailyTotal = 0;
  console.log(typeof req.body.frequency)
  switch(req.body.frequency) {
    case "1":
      dailyTotal = req.body.unitPrice
      break;
    case "2":
      dailyTotal = req.body.unitPrice / 7
      break;
    case "3":
      dailyTotal = req.body.unitPrice / 30
      break;
    case "4":
      dailyTotal = req.body.unitPrice / 365
      break;
    default:
      console.log("Please select a frequency")
  }
    console.log(dailyTotal)
})

module.exports = router;
