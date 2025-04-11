import "dotenv/config.js"
import express from 'express';
import cors from 'cors';
import session from "express-session";
import employeesRouter from "./routers/employeesRouter.js";
import pillsRouter from './routers/pillsRouter.js'
import path from "path";
const app = express();
app.use(express.json());
app.use(express.static(path.resolve('../client/dist/')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}))

app.use(employeesRouter);
app.use(pillsRouter);

app.get('/{*splat}', (req,res)=>{
    res.sendFile(path.resolve('../client/dist/index.html'));
})
const PORT = process.env.PORT || 80;
app.listen(PORT)