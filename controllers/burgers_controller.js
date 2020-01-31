const express = require("express")
const router = express.Router()
const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.all(data => {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj)
        res.render("index", burgerObj)
    })
})

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, results => {
        res.json({id: results.insertId})
    })
})

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id
    burger.update(id, results => {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router