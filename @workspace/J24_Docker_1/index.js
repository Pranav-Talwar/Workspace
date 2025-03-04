const { Client } = require('pg');

const client = new Client({
    user: 'postgres',   // Capitalized 'Postgres'
    host: 'localhost',
    database: 'postgres',
    password: '1212', 
    port: 5432
  });
  

client.connect(err => {
  if (err) {
    console.error('Connection error:', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }
  client.end();
});
