const fs = require("fs");
const HttpServer = require("http").Server;

class Mission_17 extends HttpServer {
    constructor() {
        super();
        this.listen(7000);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(request, response) {
        fs.createReadStream("./mission_17.json").pipe(response);
        response.statusCode = 201;
    };
};

module.exports = new Mission_17();