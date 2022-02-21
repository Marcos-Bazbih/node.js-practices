const EventEmitter = require("events");
const fs = require("fs");

class EventClass_11 extends EventEmitter {
    constructor() {
        super();
        this.OnFileMsg();
    };

    OnFileMsg() {
        this.on("fileMsg", (fileName) => {
            fs.writeFile(fileName, "i'm listening mission 11", (err) => {
                if (err) throw err;
            });
        });
    };
    EmitFileMsg(fileName) {
        this.emit("fileMsg", fileName);
    };
};

module.exports = new EventClass_11();