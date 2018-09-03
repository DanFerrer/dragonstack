/* const Dragon = require('./dragon');
const Generation = require('./generation');

const generation = new Generation();

console.log('generation', generation);

// const fooey = new Dragon();

// console.log(fooey);

const gooby = generation.newDragon();

// console.log(gooby); */

const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
    engine.stop();
}, 20000);