const fs = require("fs");
const util = require("util");
const http = require("http").Server;
const readFilePromise = util.promisify(fs.readFile);

class Mission_16 extends http {
    constructor() {
        super();
        this.listen(9090);
        this.on("request",this.EventHandler);
    };

    EventHandler(request, response){
        readFilePromise("./mission-16.json")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new Mission_16();