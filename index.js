const http = require('http');
const app = require ('express')()
const Server = require('socket.io');
const server = http.createServer(app);
const io = Server(server);


