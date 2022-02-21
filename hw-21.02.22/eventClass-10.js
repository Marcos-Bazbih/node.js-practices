const EventEmitter = require("events");
const fs = require("fs");

class Mission_10 extends EventEmitter {
    constructor() {
        super();
        this.on("mission_ten", this.OnPrintTen);
    };

    OnPrintTen(file, data) {
        fs.writeFile(file, data.toString(), (err) => {
            if (err) throw err;
        });
    };

    EmitPrintTen(file, data) {
        this.emit("mission_ten", file, data, (err) => {
            if (err) throw err;
        });
    };
};

module.exports = new Mission_10();