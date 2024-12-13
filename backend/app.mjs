import express from 'express';
import cors from 'cors';
import { createPool } from './config/dbConfig.mjs';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await createPool();  // Initialize the database pool
        console.log('Database pool initialized');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error initializing the application:', err);
        process.exit(1);
    }
})();
