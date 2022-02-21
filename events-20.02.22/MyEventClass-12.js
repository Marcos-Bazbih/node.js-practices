const EventEmitter = require("events");
const fs = require("fs");

class EventClass_12 extends EventEmitter {
    constructor() {
        super();
        this.OnFileMsg();
    };

    OnFileMsg() {
        this.on("FileMsg", (name, data) => {
            fs.writeFile(name, data, (err) => {
                if (err) throw err;
            });
        });
    };
    EmitFileMsg(name, data) {
        this.emit("FileMsg", name, data);
    };
}

module.exports = new EventClass_12();