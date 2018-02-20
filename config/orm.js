
const conn = require('./connection.js');

module.exports = {
    //select all has tweo parameters, resolve will work if it rejects then it'll throw an error
    selectAll: function() {
        return new Promise( (resolve, reject) => {
            const query = `SELECT * FROM burgers`;
            conn.query(query, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },

    insertOne: function(burger) {
        return new Promise( (resolve, reject) => {
            const query = `INSERT INTO burgers (burger_name) VALUES (?)`;
            conn.query(query, burger, (err, res) => {
                //reject(err)^
                if(err) reject(err);
                resolve(res);
            });
        });
    },

    updateOne: function(id) {
        return new Promise( (resolve, reject) => {
            const query = `UPDATE burgers SET devoured = true WHERE id = ?`;
            conn.query(query, id, (err, res) => {
                if(err) reject(err);
                console.log("Burger updated");
                //return resolve and res inside of resolve parameter
                resolve(res);
            });
        });
    }
}
