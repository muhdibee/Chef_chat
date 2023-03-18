// const path = require('path')
import express from 'express';
import http from 'http';
import {log} from './log.js';
import {Server} from 'socket.io'

const app  = express()
const server = http.createServer(app);
const io = new Server(300);

console.log(typeof log);


const port = 3000;
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))

});

io.on('connection', (socket)=>{
    log("socket object", socket.id)
    socket.emit("connected", "data");
})

server.listen(port, ()=> {
    log("Running on port", port);
});