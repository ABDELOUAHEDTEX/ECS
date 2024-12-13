import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Initialize Oracle Client with wallet path
try {
    const walletPath = process.env.WALLET_PATH;
    if (!walletPath) {
        throw new Error('WALLET_PATH is not defined in the environment variables.');
    }

    oracledb.initOracleClient();
    console.log('Oracle Client initialized successfully with wallet path');
} catch (err) {
    console.error('Error initializing Oracle Client:', err);
    process.exit(1);
}

// Create connection pool
async function createPool() {
    try {
        await oracledb.createPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECTION_STRING,
            poolMin: 1,
            poolMax: 4,
            poolIncrement: 1,
        });
        console.log('Database connection pool created');
    } catch (err) {
        console.error('Error creating connection pool:', err);
        process.exit(1);
    }
}

// Get a connection from the pool
async function getConnection() {
    try {
        const connection = await oracledb.getConnection();
        console.log('Database connection acquired');
        return connection;
    } catch (err) {
        console.error('Error acquiring connection:', err);
        throw err;
    }
}

// Close the pool
async function closePool() {
    try {
        await oracledb.getPool().close(10); // Graceful shutdown with 10s timeout
        console.log('Database connection pool closed');
    } catch (err) {
        console.error('Error closing connection pool:', err);
    }
}

export { createPool, getConnection, closePool };
