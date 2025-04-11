import express from 'express';
import cors from 'cors';

import employeesRouter from "./routers/employeesRouter.js";
import pillsRouter from './routers/pillsRouter.js'
const app = express();

app.use(cors())

app.use(employeesRouter);
app.use(pillsRouter);

const PORT = process.env.PORT || 80;
app.listen(PORT)