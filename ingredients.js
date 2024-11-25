const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all ingredients
router.get('/', (req, res) => {
  db.query('SELECT * FROM Ingredients', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new ingredient
router.post('/', (req, res) => {
  const { name, type, description } = req.body;
  const sql = 'INSERT INTO Ingredients (name, type, description) VALUES (?, ?, ?)';
  db.query(sql, [name, type, description], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Ingredient added', id: result.insertId });
  });
});

module.exports = router;
