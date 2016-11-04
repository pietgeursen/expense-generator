var express = require('express');
var router = express.Router();
var expenses = require('../db/expenses')
var users = require('../db/users')

router.get('/:id', function(req,res){

  users.displayItems(req.params.id)
    .then(function(data){
      for (var i = 0; i < data.length; i++) {
        data[i].pricePerDay = data[i].pricePerDay.toFixed(2);
        data[i].pricePerWeek = (data[i].pricePerDay * 7).toFixed(2);
        data[i].pricePerMonth = (data[i].pricePerDay * 30).toFixed(2);
        data[i].pricePerYear = (data[i].pricePerDay * 365).toFixed(2);
      }

      console.log(data[data.length -1]);
      res.render('expenses', {data})
    })
    .catch(function(err){
      console.log(err);
    })
})

module.exports = router
