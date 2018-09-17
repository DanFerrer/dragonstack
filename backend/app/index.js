const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        type: 'error',
        message: err.message
    });
});


engine.start();

setTimeout(() => {
    engine.stop();
}, 20000);

module.exports = app;

