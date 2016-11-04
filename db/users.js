var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  newUser,
  searchForUser,
  displayItems
}

function newUser(name){
  console.log("name!",name);
  return knex('users').insert({'name': name})
}

function searchForUser(name){
  return knex('users').where('name', name)
}

function displayItems(id) {
  return knex('users')
    .join('expenses', 'users.id', '=', 'expenses.user_id').where("expenses.user_id",id)
}
