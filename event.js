const myEvent = require('events');

class newEventClass extends myEvent {
    constructor(){
        super()
        var server1 = "server triggered"
        console.log(server1)
    }
};

const eventEmitter = new newEventClass();

eventEmitter.on('event', () => {
 console.log(this.server1)
})
eventEmitter.emit('event')