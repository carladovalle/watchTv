import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import seriesRouter from './Routes/seriesRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(seriesRouter);

const PORT: number = + process.env.PORT || 4000; 

app.listen(PORT, () => {
    console.log("Servidor rodando.")}
);