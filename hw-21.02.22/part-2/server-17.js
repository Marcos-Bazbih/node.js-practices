const fs = require("fs");
const http = require("http").Server;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class Mission_17 extends http {
    constructor() {
        super();
        this.listen(9000);
        this.on("request", this.EventHandler);
    };

    EventHandler(request, response) {
        readFilePromise("./mission-17.json")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new Mission_17();