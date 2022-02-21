const http = require("http").Server;
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile);

class mission_13 extends http {
    constructor() {
        super();
        this.listen(8000);
        this.on('request', this.EventHandler);
    };

    EventHandler(request, response) {
        readFilePromise("./mission-13.txt")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new mission_13();