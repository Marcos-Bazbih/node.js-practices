const NetServer = require("net").Server;
const fs = require("fs");

class MyServer extends NetServer {
    constructor() {
        super();
        this.listen('8080');
        this.on("connection", this.RequestHandler);
    };

    RequestHandler(socket) {
        console.log("connect");
        this.socket = socket;
        this.PrintTxt();
    };

    PrintTxt() {
        // this.socket.write("response")
        fs.readFile("./practice.txt", (err, response) => {
            if (err) this.socket.write("Error")
            this.socket.write(response)
        });
    }
};

module.exports = new MyServer();