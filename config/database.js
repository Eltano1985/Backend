import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
});

console.log(process.env.DB_PORT?"true":"false");

export default pool;
