const NetServer = require("net").Server;

class SocketServer_25 extends NetServer {
    constructor() {
        super();
        this.listen("5050");
        this.on("connection", this.SocketHandler)
    };

    SocketHandler(socket) {
        console.log("mission 25 connected !");
        this.socket = socket;
        this.PrintCounter();
    }

    PrintCounter() {
        let counter = 1;
        setInterval(() => {
            this.socket.write(`${counter *= 2}`);
        }, 4000);
    };
};


module.exports = new SocketServer_25();