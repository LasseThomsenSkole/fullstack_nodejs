import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 80;

server.listen(port, ()=> console.log(`Listening on ${port}`));
io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
})