const fs = require("fs");
const http = require("http").Server;
 
class Mission_23 extends http{
    constructor(){
        super();
        this.listen(7003);
        this.on("request",this.RequestHandler);
    };

    RequestHandler(request, response){
        const stream = fs.createReadStream("./mission-23.json");
        stream.pipe(response);
        response.statusCode = 201;
    };
};

module.exports = new Mission_23();