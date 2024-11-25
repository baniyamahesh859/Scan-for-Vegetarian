const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

// Scan route to process barcode or ingredients
router.post('/', async (req, res) => {
  const pythonProcess = spawn('python3', ['scripts/scan.py', JSON.stringify(req.body.ingredients)]);

  pythonProcess.stdout.on('data', (data) => {
    res.json({ result: data.toString() });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    res.status(500).send('Error processing ingredients');
  });
});

module.exports = router;
