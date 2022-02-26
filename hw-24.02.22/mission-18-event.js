const fs = require("fs");
const HttpServer = require("http").Server;

class Mission_18 extends HttpServer {
    constructor() {
        super();
        this.listen(7003);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(request, response) {
        fs.createReadStream("./mission_18.json").pipe(response);
        response.statusCode = 201;
    };
};

module.exports = new Mission_18();