const orm = require("../config/orm")

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", res => {
            return cb(res)
        })
    },
    create: (name, cb) => {
        orm.insertOne("burgers", "burger_name", name, res => {
            return cb(res)
        })
    },
    update: (id, cb) => {
        orm.updateOne("burgers", id, res => {
            return cb(res)
        })
    }
}

module.exports = burger;