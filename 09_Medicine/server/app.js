import express from 'express';
import employeesRouter from "./routers/employeesRouter.js";
import pillsRouter from './routers/pillsRouter.js'
const app = express();

app.use(employeesRouter);
app.use(pillsRouter);

const PORT = process.env.PORT || 80;
app.listen(PORT)