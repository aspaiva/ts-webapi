import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express(); // create express app
app.use(helmet()); // security middleware
app.use(morgan('tiny'));  // logging middleware
app.use(express.json()); // body parser middleware

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send('Hello, TypeScript WebAPI!');
});

export default app;