const NetServer = require("net").Server;

class socketServer_26 extends NetServer {
    constructor() {
        super();
        this.listen("6060");
        this.on("connection", this.SocketHandler);
    };

    SocketHandler(socket) {
        console.log("mission 26 connected !");
        this.socket = socket;
        this.PrintTime();
    };

    PrintTime() {
        setInterval(() => {
            let seconds = new Date().getSeconds().toString();
            let minutes = new Date().getMinutes().toString();
            let hours = new Date().getHours().toString();
            this.socket.write(`${hours}:${minutes}:${seconds} `)
        }, 1000)
    };
};

module.exports = new socketServer_26();