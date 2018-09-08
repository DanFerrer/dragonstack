const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        pool.query(
            'INSERT INTO GENERATION(experation) VALUES($1) RETURNING id',
            [generation.experation],
            (err, res) => { 
                if (err) return console.error(err);
            }
        )
    }
};

module.exports = GenerationTable;