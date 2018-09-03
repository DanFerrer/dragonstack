const { Router } = require('express');

const router = new Router();

router.get('/dragon/new', (req, res) => {
    res.json({
        dragon: req.app.locals.engine.generation.newDragon()
    });
});

module.exports = router;

