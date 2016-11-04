var Knex = require('knex')
var knexConfig = require('../knexfile')
var cleaner = require('knex-cleaner')

var test = require('tape')

var knex = Knex(knexConfig.test)

test('can create a user', function(t) {
  rollbackLatest(knex)
    .then(function() {
      return knex('users').insert({name: 'Pou'})
    })
    .then(function() {
      return knex('users').where({name: 'Pou'})
    })
    .then(function(students) {
      t.equal(students.length, 1, 'found one user')
      return cleaner.clean(knex)
    })
    .then(function() {
      t.end()
    })
})
