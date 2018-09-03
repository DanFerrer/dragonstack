const Dragon = require('../dragon')
const { REFRESH_RATE, SECONDS } = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;

function calculateExperation() {
    const experationPeriod = Math.floor(Math.random() * (refreshRate / 2));
    const msUntilExperation = Math.random() < 0.5 ? refreshRate - experationPeriod : refreshRate + experationPeriod;

    return new Date(Date.now() + msUntilExperation);
}

class Generation {
    constructor() {        
        this.experation = calculateExperation();
    }

    newDragon() {
        if (Date.now() > this.experation) {
            throw new Error(`This generation experied on ${this.experation}`);
        }

        return new Dragon();
    }

}

module.exports = Generation;