exports.up = knex => knex.schema.createTable("products", table => {
  table.increments("id");
  table.text("imagem")
  table.text("title")
  table.integer("price")
  table.text("description")
  table.text("category")

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("products");