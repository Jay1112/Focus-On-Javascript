class EventEmitter {

    constructor() {
        this.track = {}
    }

    on(eventName, callback) {
        const eventObj = { callback, type: 'on' }
        if (this.track.hasOwnProperty(eventName)) {
            this.track[eventName].push(eventObj);
        } else {
            this.track[eventName] = [eventObj]
        }
    }

    once(eventName, callback) {
        const eventObj = { callback, type: 'once' }
        if (this.track.hasOwnProperty(eventName)) {
            this.track[eventName].push(eventObj);
        } else {
            this.track[eventName] = [eventObj]
        }
    }

    off(eventName, callback) {
        if (this.track.hasOwnProperty(eventName)) {
            const updated = this.track[eventName].filter((item) => item.callback !== callback);
            this.track[eventName] = updated;
        }
    }

    emit(eventName, ...args) {
        if (this.track.hasOwnProperty(eventName)) {
            const cbs = this.track[eventName];
            const updated = [];

            for (const cb of cbs) {
                const type = cb.type;
                const fn = cb.callback;
                if (type === 'on') {
                    fn(...args);
                    updated.push(cb);
                } else if (type === 'once') {
                    delete this.track[eventName];
                    fn(...args);
                }
            }

            this.track[eventName] = updated;
        }
    }
}

module.exports = EventEmitter