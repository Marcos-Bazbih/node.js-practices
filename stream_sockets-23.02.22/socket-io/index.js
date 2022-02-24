const HttpServer = require("http").createServer();
const ioSocket = require("socket.io")(HttpServer);
const fs = require("fs");

HttpServer.listen(3000)

HttpServer.on("request", (req, res) => {
    fs.readFile("./index.html", (err, data) => {
        if (err) { return res.end("Error") }
        res.end(data);
    });
});

ioSocket.on('connection', (socket) => {
    
})