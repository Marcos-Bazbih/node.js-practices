const EventEmitter = require("events");
const fs = require("fs");

class EventClass_13 extends EventEmitter {
    constructor() {
        super();
        this.OnPrintArray();
    }

    OnPrintArray() {
        this.on("printArray", (array) => {
            fs.writeFile("mission_13.txt", array.join("-"), (err) => {
                if (err) throw err;
            });
        });
    };
    EmitPrintArray(array) {
        this.emit("printArray", array);
    };
};

module.exports = new EventClass_13();