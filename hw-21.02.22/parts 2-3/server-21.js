const fs = require("fs");
const http = require("http").Server;

class Mission_21 extends http{
    constructor(){
        super();
        this.listen(4002);
        this.on("request",this.RequestHandler);
    };

    RequestHandler(request, response){
        const stream = fs.createReadStream("./mission-21.json");
        stream.pipe(response);
    };
};

module.exports = new Mission_21();