const EventEmitter = require("events");
const fs = require("fs");

class EventClass_14 extends EventEmitter {
    constructor() {
        super();
        this.OnPrintNumbers();
    };

    OnPrintNumbers() {
        this.on("printNumbers", (array) => {
            fs.writeFile("./mission_14.txt", array.toString(), (err) => {
                if (err) throw err;
            });
        });
    };
    EmitPrintNumbers(array) {
        this.emit("printNumbers", array.filter((item) => item > 18))
    };
};

module.exports = new EventClass_14();