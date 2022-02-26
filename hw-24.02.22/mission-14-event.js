const fs = require("fs");
const HttpServer = require("http").Server;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class Mission_14 extends HttpServer {
    constructor() {
        super();
        this.listen(8000);
        this.on("request",this.RequestHandler);
    };

    RequestHandler(request, response){
        readFilePromise("./mission_14.txt")
            .then(res => response.end(res))
            .catch(err => response.end("Error"))
    };
};

module.exports = new Mission_14();