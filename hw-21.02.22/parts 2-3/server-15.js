const http = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class Mission_15 extends http {
    constructor() {
        super();
        this.listen(8080);
        this.on("request", this.EventHandler);
    };

    EventHandler(request, response) {
        readFilePromise("./mission-15.txt")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new Mission_15();