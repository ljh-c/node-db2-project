
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // creates auto-incrementing primary key - 'id' by default
    table.increments();

    // creates text field called vin which is required and unique
    table.string('vin', 17).unique().notNullable();

    table
      .string('make', 64)
      .notNullable()
      .index(); // makes searching by make faster

    table.string('model', 64).notNullable();

    table.float('mileage', 0).notNullable();

    table.string('transmission_type', 64);
    table.string('title_status', 64);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
