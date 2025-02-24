import { Client } from 'pg';

// Create a new client instance with your configuration
const client = new Client({
  host: 'localhost',          // Use your actual host (e.g., database server IP/domain)
  port: 5432,                 // Default PostgreSQL port
  database: 'TEST',           // Your database name
  user: 'postgres',           // Your database user
  password: '1212',           // Replace with your actual password
  ssl: false                  // Set to true/rejectUnauthorized for production
});

// Function to create the 'user' table
const create = async () => {
  
    await client.connect(); // Connect to the database
    console.log('Connected to the database!');

    // Create the 'user' table
    const result = await client.query(`
     INSERT INTO users 
     (username, email, password) 
     VALUES ('username2', 'user3@example.com', 'user_password');
    `);

    console.log( result);

};

// Call the function to create the table
create();
