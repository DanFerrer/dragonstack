const pool = require('../databasePool');
const traits = require('../data/traits');

traits.forEach(trait => {
    trait.values.forEach(traitValue => {
        pool.query(
            `INSERT INTO trait("traitType", "traitValue") 
            VALUES($1, $2)
            RETURNING id`,
            [trait.type, traitValue],
            (err, res) => {
                if (err) console.log(err);

                console.log(`Inserted trait - id: ${res}`);
            }
        );
    });
});