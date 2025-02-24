"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Create a new client instance with your configuration
const client = new pg_1.Client({
    host: 'localhost', // Use your actual host (e.g., database server IP/domain)
    port: 5432, // Default PostgreSQL port
    database: 'TEST', // Your database name
    user: 'postgres', // Your database user
    password: '1212', // Replace with your actual password
    ssl: false // Set to true/rejectUnauthorized for production
});
// Function to create the 'user' table
const create = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect(); // Connect to the database
    console.log('Connected to the database!');
    // Create the 'user' table
    const result = yield client.query(`
     INSERT INTO users 
     (username, email, password) 
     VALUES ('username2', 'user3@example.com', 'user_password');
    `);
    console.log(result);
});
// Call the function to create the table
create();
