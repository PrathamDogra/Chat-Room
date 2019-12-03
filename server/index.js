const express = require("express");
const http = require("http");

const socketio = require("socket.io");
const PORT = process.env.PORT || 5000;

const router = require('./Routes/routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection',(socket)=>{
    console.log("We have a new connection!!!!");
    socket.on('disconnect', ()=>{
        console.log('User had left!!!');
    })
})
app.use(router);
server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
