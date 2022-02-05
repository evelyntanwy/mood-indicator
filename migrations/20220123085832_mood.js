exports.up = function (knex) {
  return knex.schema.createTable("mood", (table) => {
    table.increments("id");
    table.string("name");
    table.string("image");
    table.string("quotes");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("mood");
};
