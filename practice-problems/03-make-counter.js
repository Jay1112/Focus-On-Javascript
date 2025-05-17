function makeCounter(initialValue = 0) {
    let counter = initialValue;

    return {
        increment: () => {
            counter++;
            return counter;
        },
        decrement: () => {
            counter--;
            return counter;
        },
        reset: () => {
            counter = initialValue;
            return counter;
        }
    }
}

module.exports = makeCounter;