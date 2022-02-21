const http = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class MyServer_1 extends http {
    constructor() {
        super();
        this.listen(8000);
        this.on('request', this.HandleRequest)
    };

    HandleRequest(request, response) {
        readFilePromise("./tupac.txt")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new MyServer_1();