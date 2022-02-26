const fs = require("fs");
const EventEmitter = require("events");

class Mission_13 extends EventEmitter {
    constructor() {
        super();
        this.OnPrint();
    };

    OnPrint() {
        this.on("print", (fileName, fileData) => {
            fs.writeFile(`${fileName}.json`, JSON.stringify(fileData), (err) => {
                if (err) throw err;
            });
        });
    };

    EmitPrint(fileName, fileData) {
        this.emit("print", fileName, fileData);
    };
};

module.exports = new Mission_13();