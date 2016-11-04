var express = require('express');
var router = express.Router();
var expenses = require('../db/expenses')
var users = require('../db/users')

router.get('/:id', function(req,res){

  users.displayItems(req.params.id)
    .then(function(data){
      data[0].pricePerDay = data[0].pricePerDay.toFixed(2);
      data[0].pricePerWeek = (data[0].pricePerDay * 7).toFixed(2);
      data[0].pricePerMonth = (data[0].pricePerDay * 30).toFixed(2);
      data[0].pricePerYear = (data[0].pricePerDay * 365).toFixed(2);

      console.log(data[data.length -1]);
      res.render('expenses', {data})
    })
    .catch(function(err){
      console.log(err);
    })
})

module.exports = router
