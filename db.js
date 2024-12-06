const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: 'mk112233',        
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
