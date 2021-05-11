
exports.up = async function(knex) {
  await knex.schema.createTable("fruits",(table)=>{
      table.increments("id")
      table.text("name").notNull().unique()
      table.float("avgWeightOz").notNull()
      table.boolean("delicious").notNull()
      table.text("color")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
