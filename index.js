// import {log} from './log.js';
// const path = require("path")
// const express = require("express");
// const app = express();
// const http = require("http");

// const server = http.createServer(app);
// const port = 8000;

// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req,res) => {
//     // res.send("Hello");
//     res.sendFile(path.join(__dirname, "index.html"))

// });

// io.on("connection", async (socket)=>{
//     console.log(`client ${socket.id} connected`);
//     socket.emit("connected", {id:socket.id });


//     socket.on("disconnect", async ()=>{
//         console.log("client disconnected.")
//     })
// });

// server.listen(port, ()=> {
// console.log(`Running on port ${port}`);
// });

