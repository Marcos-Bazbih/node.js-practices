const fs = require("fs");
const HttpServer = require("http").Server;

class Mission_16 extends HttpServer {
    constructor() {
        super();
        this.listen(4002);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(request, response) {
        fs.createReadStream("./mission_16.json").pipe(response);
    };
};

module.exports = new Mission_16();