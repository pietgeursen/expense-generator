
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('expenses', function(table){
    table.increments('id').primary()
    table.string('item')
    table.integer('pricePerWeek')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('expenses')
};
