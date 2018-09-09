const TRAITS = require('../../data/traits');

const DEFAULT_PROPERTIES = {
    get birthdate() {
        return new Date();
    },

    get randomTraits() {
        return TRAITS.map(trait => {
            return {
                type: trait.type,
                values: trait.values[Math.floor(Math.random() * trait.values.length)]
            }
        });
    },

    nickname: 'unnamed',
    generationId: undefined,
};

class Dragon {
    constructor({ birthdate, nickname, traits, generationId } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;