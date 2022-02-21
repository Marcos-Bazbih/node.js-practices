const EventEmitter = require("events");

class EventClass_8 extends EventEmitter {
    constructor() {
        super();
        this.OnDoNow();
    }

    OnDoNow() {
        this.on("doNow", () => {
            console.log("marcos");
        })
    }
    EmitDoNow() {
        this.emit("doNow");
    }
}

module.exports = new EventClass_8();