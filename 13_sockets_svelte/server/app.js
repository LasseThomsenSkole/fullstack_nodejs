import "dotenv/config"
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import nicknamesRouter from "./routers/nicknamesRouter.js";
import session from "express-session";
import cors from "cors";


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use('/api',nicknamesRouter);

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('client-sends-color', (data) => {
        console.log(data);
        //socket.emit('server-sends-color', data); virker ik
        //socket.broadcast.emit('server-sends-color', data); broadcaster til alle andre men ik sig selv
        io.emit('server-sends-color', data);
    })

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    })
})

const port = process.env.PORT || 80;
server.listen(port, ()=> console.log(`Listening on ${port}`));
