const EventEmitter = require('events');

class EventClass_7 extends EventEmitter {
    constructor() {
        super();
        this.OnPrint();
    }

    OnPrint() {
        this.on("printName", (value) => {
            console.log(`HELLO THERE ${value}`);
        });
    }
    EmitPrint(value) {
        this.emit("printName", value);
    }
};
module.exports = new EventClass_7();
