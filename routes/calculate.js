var express = require('express');
var router = express.Router();
var expenses = require('../db/expenses')
var users = require('../db/users')

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("calculate")
});

router.post('/', function(req, res) { //recieves form submission
  console.log(req.body);
  var dailyTotal = 0;
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

    var userId;

    users.newUser(req.body.userName)
      .then(function() {
        return users.searchForUser(req.body.userName)
      })
      .then(function(userInfo) {
        console.log("user info: ",userInfo[0])
        userId = userInfo[0].id
        return expenses.addNewExpense(req.body.itemName, userInfo[0].id, dailyTotal)
      })
      .then(function(expenses){
        console.log("expenses", expenses.user_id);
        res.redirect(`/expenses/${userId}`)
      })
      .catch(function(err) {
        console.log(err)
      })

})

module.exports = router;
