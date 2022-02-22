const fs = require("fs");
const http = require("http").Server;
// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);

class Mission_20 extends http{
    constructor(){
        super();
        this.listen(3002);
        this.on("request",this.RequestHandler);
    };

    RequestHandler(request, response){
        const stream = fs.createReadStream("./mission-20.json");
        stream.pipe(response);
    };
};

module.exports = new Mission_20();