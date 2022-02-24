const HttpServer = require("http").Server;
const fs = require("fs");

class MyServer_2 extends HttpServer {
    constructor() {
        super();
        this.listen(8000);
        this.on("request", this.RequestHandler);
    };

    RequestHandler(req, res) {
        fs.readFile("./practice.txt", (err, response) => {
            if (err) res.end("Error")
            res.end(response);
        });
    };
};

module.exports = new MyServer_2();
