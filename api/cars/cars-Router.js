const express = require('express');

const router = express.Router();

const db = require('../../data/dbConfig');


// GET - api/cars - retrieves an array of all the car objects
router.get('/', (req, res) => {
    db('cars')
      .then((cars) => {
        res.json(cars);
      })
      .catch((err) => {
        res.status(500).json({ message: "Error retrieving cars from the database" });
      });
});
  
// GET -> api/cars/:id -> gets specific cars object by their ID

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars')
      .where({ id })
      .first()
      .then((car) => {
        res.json(car);
      })
      .catch((err) => {
        res.status(500).json({ message: "Error retrieving cars from the database" });
    });
});
  
// POST -> api/cars -> post new car object 
router.post('/', (req, res) => {
    
    db('cars')
    .insert(req.body, 'id')
    .then((ids) => {
        res.status(201).json({ success: true, idNumber: ids })
    })
    .catch((err) => {
        res.status(500).json({ "message": "Error, Could not add Account" })
    })
})

// EDIT -> api/cars/:id -> updates specific car object by their ID

router.put('/:id', (req, res) => {
    const body = req.body
    const {id} = req.params
    db('cars')
      .where({id: id})
      .update(body)
      .then(count => {
        count > 0 ?
          res.status(200).json({ Alert: 'Updated', cars: body })
          : res.status(404).json({message: 'ACCOUNT ID DOES NOT EXIST!'})
      })
      .catch((err) => {
        res.status(500).json({ message: 'Error Updating Account' })
      })
  
})
  
// DELETE -> api/cars/:id -> Deletes car object by their specific id
router.delete('/:id', (req, res) => {
    const {id}=req.params
    db('cars')
      .where({ id: id })
      .del()
      .then(count => {
        count > 0 ?
          res.status(200).json({ Alert: 'Deleted', cars: req.body })
          : res.status(404).json({message: 'ACCOUNT ID DOES NOT ExiST'})
      })
      .catch((err) => {
      res.status(500).json({ message: 'Error, did not Delete' })
    })
})


module.exports = router;