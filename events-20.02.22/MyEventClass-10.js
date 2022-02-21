const EventEmitter = require("events");

class EventClass_9 extends EventEmitter {
    constructor() {
        super();
        this.OnListen();
    }

    OnListen() {
        this.on("listen", () => {
            console.log("I am listening");
        })
    }
    EmitListen() {
        this.emit("listen")
    }
}

module.exports = new EventClass_9();