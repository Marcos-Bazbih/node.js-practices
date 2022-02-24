const NetServer = require("net").Server;

class socketServer_27 extends NetServer {
    constructor() {
        super();
        this.listen("3333");
        this.on("connection", this.SocketHandler);
    };

    SocketHandler(socket) {
        this.socket = socket;
        this.PrintCity();
    };

    PrintCity() {
        let counter = 0;
        const cities = ["Ashdod", "Lod", "Tel aviv", "Haifa", "Yavne", "Natania"];
        setInterval(() => {
            this.socket.write(`${cities[counter]} `);
            counter++;
            if (counter === cities.length) counter = 0;
        }, 3000);
    }
};

module.exports = new socketServer_27();
