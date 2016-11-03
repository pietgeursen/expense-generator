var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  newUser,
  searchForUser
}

function newUser(name){
  return knex('users').insert('name', name)
}

function searchForUser(name){
  return knex('users').where('name', name)
}
