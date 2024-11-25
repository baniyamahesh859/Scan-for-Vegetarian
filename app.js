const express = require('express');
const bodyParser = require('body-parser');
const ingredientsRoutes = require('./routes/ingredients');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/ingredients', ingredientsRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
