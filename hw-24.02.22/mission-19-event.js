const NetServer = require("net").Server;

class Mission_19 extends NetServer {
    constructor() {
        super();
        this.listen("5050");
        console.log("socket connected");
        this.on("connection", this.ConnectionHandler)
    };

    ConnectionHandler(socket) {
        this.socket = socket;
        this.ThreeSecPrint();
    };

    ThreeSecPrint() {
        let counter = 1;
        setInterval(() => {
            this.socket.write(`${counter *= 3}`);
        }, 3000);
    }
};

module.exports = new Mission_19();