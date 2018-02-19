const orm = require('../config/orm.js');

module.exports = {
    selectAllBurgers: async function() {
        const burgers = await orm.selectAll();

        return {
            notEaten: burgers.filter(burger => !burger.devoured),
            eaten: burgers.filter(burger => burger.devoured)
        };
    },

    insertNewBurger: async function(name) {
        return await orm.insertOne(name);
    },

    devourBurger: async function(id) {
        return await orm.updateOne(id);
    }
};
