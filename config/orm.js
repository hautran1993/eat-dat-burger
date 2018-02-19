
const conn = require('./connection.js');

module.exports = {
    selectAll: async function() {
        return new Promise( (resolve, reject) => {
            const query = `SELECT * FROM burgers`;
            conn.query(query, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },

    insertOne: async function(burger) {
        return new Promise( (resolve, reject) => {
            const query = `INSERT INTO burgers (burger_name) VALUES (?)`;
            conn.query(query, burger, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },

    updateOne: async function(id) {
        return new Promise( (resolve, reject) => {
            const query = `UPDATE burgers SET devoured = true WHERE id = ?`;
            conn.query(query, id, (err, res) => {
                if(err) reject(err);
                console.log("Burger updated");
                resolve(res);
            });
        });
    }
}
