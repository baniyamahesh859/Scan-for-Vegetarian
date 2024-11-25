const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Replace with your MySQL username
  password: '',         // Replace with your MySQL password
  database: 'ScanForVeg',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
