const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.locals.engine = engine;

engine.start();

setTimeout(() => {
    engine.stop();
}, 20000);

module.exports = app;

