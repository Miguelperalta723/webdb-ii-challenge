
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'qazedcrfv', make: 'toyota', model: 'camry', milage: 12345},
        {VIN: 'tgbyhnujm', make: 'bmw', model: '525i', milage: 67890},
        {VIN: 'tgbrfvedc', make: 'honda', model: 'accord', milage: 765443}
      ]);
    });
};
