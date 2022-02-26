const fs = require("fs");
const EventEmitter = require("events");

class Mission_12 extends EventEmitter {
    constructor() {
        super();
        this.OnPrint();
    };

    OnPrint() {
        this.on("print", (fileName, fileData) => {
            fs.writeFile(`${fileName}.txt`, fileData.toString(), (err) => {
                if (err) throw err;
            });
        });
    };

    EmitPrint(fileName, fileData) {
        this.emit("print", fileName, fileData);
    };
};

module.exports = new Mission_12();