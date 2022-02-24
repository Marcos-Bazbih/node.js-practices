const NetServer = require('net').Server;

class SocketServer extends NetServer {
    constructor() {
        super();
        this.listen('4000');
        this.on('connection', this.ConnectionHandler);
    }
    
    ConnectionHandler(socket) {
        console.log(`Someone connected!`);
        this.socket = socket;
        this.Repeated();
    }
    Repeated() {
        let counter = 0;
        setInterval(() => {
            this.socket.write(`${counter++} `)
        }, 1000);
    }

}
module.exports = new SocketServer();