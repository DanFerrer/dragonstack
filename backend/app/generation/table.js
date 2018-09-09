const pool = require('../../databasePool');
class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO GENERATION(experation) VALUES($1) RETURNING id',
                [generation.experation],
                (err, res) => {
                    if (err) return reject(err);
                    
                    resolve({
                        generationId: res.rows[0].id
                    })
                }
            )
        })
    }
};

module.exports = GenerationTable;