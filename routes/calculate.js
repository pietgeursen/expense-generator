var express = require('express');
var router = express.Router();
var expenses = require('../db/expenses')
var users = require('../db/users')

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("calculate")
});

router.post('/', function(req, res) { //recieves form submission
  var {userName, itemName, frequency, unitPrice} = req.body

  var dailyTotal = unitPrice / frequency 

  users.findOrCreateUser()
    .then(function(user) {
      return expenses.addNewExpense(itemName, user.id, dailyTotal)
        .then(function() {
          return Promise.resolve(user)
        })
    })
    .then(function(user){
      res.redirect(`/expenses/${user.id}`)
    })
    .catch(function(err) {
      console.log(err)
    })

})

module.exports = router;
