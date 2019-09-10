/// vin make model milage
exports.up = function(knex) {
  return knex.schema.createTable('cars' , tbl => {
      tbl.increments();
      tbl.string('VIN' , 128).unique().notNullable();
      tbl.string('make' , 128);
      tbl.string('model' , 128);
      tbl.integer('milage');
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
