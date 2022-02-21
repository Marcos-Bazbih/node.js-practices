const EventEmitter = require("events");

class EventClass_9 extends EventEmitter {
    constructor() {
        super();
        this.OnPrintNames();
    }

    OnPrintNames() {
        this.on("printNow", (num) => {
            for (let i = 0; i < num; i++) {
                console.log("HELLO THERE");
            }
        })
    }

    EmitPrintNames(num) {
        this.emit("printNow", num)
    }
}

module.exports = new EventClass_9();