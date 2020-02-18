const express = require('express');

const router = express.Router();

const db = require('./data/dbConfig.js');

// GET CARS
router.get('/', async (req, res) => {
  try {
    res.status(200).json(await db('cars'));
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get car list. ' + err.message })
  }
});

// GET CAR BY ID

// GET CAR BY VIN

// ADD CAR

router.post('/', async (req, res) => {
  try {
    await db('cars').insert(req.body);

    // db.raw('SELECT last_insert_rowid() as id') => [ { id: 1 } ]
    // db.select(db.raw('last_insert_rowid() as id')) => [ { id: 1 } ]
    const [newCar] = await db.select(db.raw('last_insert_rowid() as id'));

    return getById('cars', newCar.id).then(car => {
      res.status(201).json(car);
    });
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to add car. ' + err.message })
  }
});

// helpers

function getById(table, rowId) {
  return db(table).where({ id: rowId }).first();
}

module.exports = router;