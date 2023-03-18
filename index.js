// const path = require('path')
import express from 'express';
import http from 'http';
import {log} from './log.js';

const app  = express()
const server = http.createServer(app);
// const io = require('socket.io')(server);

console.log(typeof log);


const port = 3000;
app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname, "index.html"))
    res.send("Hello");

});

server.listen(port, ()=> {
    log("Running on port", port);
});