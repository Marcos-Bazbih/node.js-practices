const ZipServer = require("http").Server;
const fs = require("fs");
const zlib = require("zlib");

class MyServer_3 extends ZipServer {
    constructor() {
        super();
        this.listen('5050');
        this.on("request", this.RequestHandler);
    };

    RequestHandler(req, res) {
        const readStream = fs.createReadStream("./zip.txt");
        const writeStream = fs.createWriteStream("./txt.zip");
        const gzip = zlib.createGzip();
        readStream.pipe(gzip).pipe(writeStream);

        fs.createReadStream("./txt.zip").pipe(res);
    };
};

module.exports = new MyServer_3();