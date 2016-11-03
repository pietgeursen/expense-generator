var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  addNewExpense,
  deleteExpense
}

function addNewExpense(name, user, price){
  knex('expenses').insert({item: name, user_id: user, pricePerDay: price})
}

function deleteExpense(id) {
  knex('expenses').where('id', id).del()
}
