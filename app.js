const express = require('express');
const path = require('path');
const { connectDB } = require('./config/database');

const userRoutes = require('./routes/users');
const scanRoutes = require('./routes/scan');

const app = express();

// Connect to Database
connectDB();

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

app.use('/api/users', userRoutes);
app.use('/api/scan', scanRoutes);

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;