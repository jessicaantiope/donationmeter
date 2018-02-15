exports.up = (knex, Promise) => {
  return knex.schema.createTable('donors', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('amount')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('donors')
}
