const fs = require("fs");
const HttpServer = require("http").Server;

class Mission_15 extends HttpServer {
    constructor() {
        super();
        this.listen(3002);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(request, response) {
        fs.createReadStream("./mission_15.json").pipe(response);
    };
};

module.exports = new Mission_15();