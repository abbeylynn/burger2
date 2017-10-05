var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {

    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function(data) {
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.burger_id
        }
    }).then(function(data) {
        console.log('data: ', data);
        res.redirect("/");
    });
});

module.exports = router;