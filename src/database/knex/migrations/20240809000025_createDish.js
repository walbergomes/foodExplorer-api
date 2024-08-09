exports.up = knex => knex.schema.createTable("dish", table => {
  table.increments("id")
  table.text("title").notNullable()
  table.text("image")
  table.text("category")
  table.text("description")
  table.integer("price")
}) 


exports.down = knex => knex.schema.dropTable("dish")