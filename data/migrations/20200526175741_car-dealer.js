
exports.up = function(knex) {
  
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');

        tbl.integer('VIN', 17)
        .unique()
        .index()
        .notNullable();

        tbl.string('make', 128)
        .notNullable();

        tbl.string('model', 128)
        .notNullable();

        tbl.integer('mileage', 128)
        .notNullable();

        tbl.string('transmission', 128)
       
        tbl.boolean('title')

    })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
