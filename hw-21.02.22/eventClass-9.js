const EventEmitter = require("events");
const fs = require("fs");

class Mission_9 extends EventEmitter {
    constructor() {
        super();
        this.on("mission_nine", this.OnPrintNine);
    };

    OnPrintNine(file_name) {
        fs.writeFile(file_name, "I'm listening - mission 9", (err) => {
            if (err) throw err;
        });
    };

    EmitPrintNine(file_name) {
        this.emit("mission_nine", file_name, (err) => {
            if (err) throw err;
        });
    };
};

module.exports = new Mission_9();