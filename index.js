// import {log} from './log.js';
const path = require("path")
const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const port = 8000;

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req,res) => {
    // res.send("Hello");
    res.sendFile(path.join(__dirname, "index.html"))

});

io.on("connection", (socket)=>{
    console.log("socket object connected");
    socket.emit("connected", "data");
})

server.listen(port, ()=> {
console.log(`Running on port ${port}`);
});