import express from 'express';
import cors from 'cors';
import session from "express-session";
import dotenv from 'dotenv/config';
import employeesRouter from "./routers/employeesRouter.js";
import pillsRouter from './routers/pillsRouter.js'
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
}))
/* kunne også gøre sådan her
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 */
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}))

app.use(employeesRouter);
app.use(pillsRouter);

const PORT = process.env.PORT || 80;
app.listen(PORT)