const connection = require("./connection")

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, (err, results) => {
            if (err) throw err
            return cb(results)
        })
    },
    insertOne: function(tableInput, col, value, cb) {
        const queryString = `INSERT INTO ${tableInput} (${col}) VALUES ('${value}')`
        connection.query(queryString, (err, results) => {
            if (err) throw err
            return cb(results)  
        })
    },
    updateOne: function(tableInput, id, cb) {
        const queryString = `UPDATE ${tableInput} SET devoured=true WHERE id = ${id}`
        connection.query(queryString, (err, results) => {
            if (err) throw err
            return cb(results)
        })
    }
}

module.exports = orm;
