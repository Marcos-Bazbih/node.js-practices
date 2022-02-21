const EventEmitter = require("events");
const fs = require("fs");

class Mission_11 extends EventEmitter {
    constructor() {
        super();
        this.on("mission_eleven", this.OnPrintEleven);
    };

    OnPrintEleven(arr) {
        fs.writeFile("./mission-11.json", JSON.stringify(arr), (err) => {
            if (err) throw err;
        });
    };

    EmitPrintEleven(arr) {
        this.emit("mission_eleven", arr, (err) => {
            if (err) throw err;
        });
    };
};

module.exports = new Mission_11();