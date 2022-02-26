const fs = require("fs");
const EventEmitter = require("events");

class Mission_11 extends EventEmitter {
    constructor() {
        super();
        this.OnPrint();
    };

    OnPrint() {
        this.on("print", (fileName) => {
            fs.writeFile(`${fileName}.txt`, "Im listening", (err) => {
                if (err) throw err;
            });
        });
    };

    EmitPrint(fileName) {
        this.emit("print", fileName);
    };
};

module.exports = new Mission_11();