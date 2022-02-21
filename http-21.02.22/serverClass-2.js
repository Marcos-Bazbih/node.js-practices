const http = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

class MyServer_2 extends http {
    constructor() {
        super();
        this.listen(8080);
        this.on('request', this.RequestHandler)
    };

    RequestHandler(request, response) {
        readFile("./barcelona.txt")
            .then(data => response.end(data))
            .catch(err => response.end("Sorry, there is an Error"))
    };
};

module.exports = new MyServer_2();