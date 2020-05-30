
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([

        {
          VIN: '0123434656A', 
          make: 'Nissan', 
          model: 'Altima',
          mileage: 40543, 
          transmission: 'Automatic', 
          title: 'true'
        },
        {
          VIN: '02145424F', 
          make: 'Honda', 
          model: 'Accord',
          mileage: 20321, 
          transmission: 'Manual', 
          title: 'true'
        },
        {
          VIN: '024353624F', 
          make: 'Toyota', 
          model: 'Camry',
          mileage: 100389, 
          transmission: 'Automatic', 
          title: 'true'
        },
              
      ]);
    });
};
