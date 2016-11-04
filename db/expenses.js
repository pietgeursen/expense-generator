var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  addNewExpense,
  deleteExpense
}

function addNewExpense(name, user, price){
  console.log(name,user,price);
  return knex('expenses').insert({item: name, user_id: user, pricePerDay: price})
}

function deleteExpense(id) {
  return knex('expenses').where('id', id).del()
}
