import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.listen(PORT, () => console.log(`App running on port ${PORT}`))