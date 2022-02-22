const fs = require("fs");
const http = require("http").Server;

class Mission_22 extends http {
    constructor() {
        super();
        this.listen(7000);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(request, response) {
        const stream = fs.createReadStream("./mission-22.json");
        stream.pipe(response);
        response.statusCode = 201;
    };
};

module.exports = new Mission_22();