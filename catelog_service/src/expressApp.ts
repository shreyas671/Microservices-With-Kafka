import express from 'express';
import cataLogRouter from "./api/catelog.routes"

const app = express();

app.use(express.json());

app.use("/",cataLogRouter);

export default app;