const express = require('express');

const db = require('./data/dbConfig');

const router = express.Router();

router.get('/', (req , res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
})


router.post('/', (req, res) => {
    const newCar = req.body;
    db('cars').insert(newCar)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(() => {
        res.status(500).json({
            message: 'something went wrong adding car'
        })
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('cars')
    .where({id}).update(changes)
    .then(count => {
      if (count) {
        res.status(200).json({ message: 'car updated' });
      } else {
        res.status(404).json({ message: 'car not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Could not update car' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db("cars")
    .where({ id }).del()
    .then(count => {
        if (count) {
          res.status(200).json({ message: 'car deleted' });
        } else {
          res.status(404).json({ message: "car not found" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error deleting car" });
    });
});

module.exports = router;