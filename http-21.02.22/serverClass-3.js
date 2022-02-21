const http = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile)

class MyServer_3 extends http {
    constructor() {
        super();
        this.listen(9000);
        this.on('request', this.RequestHandler);
    };

    RequestHandler(request, response) {
        readFile("./students.json")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new MyServer_3();