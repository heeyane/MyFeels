const db = require("../models");

module.exports = {
    findUserByEmail: function (req, res) {
        db.Users
            .find({ email: req.query.email })
            .then(response => {
                console.log("res" + response[0]._id);
                if (req.query.password === response[0].password) {
                    res.json(response[0]._id)
                } else {
                    res.status(422).json(err)
                }
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Users
            .findOne({ email: req.body.email }, function (err, user) {
                if (user) {
                    console.log("fail")
                    res.status(409).json(err);
                } else {
                    console.log("fuck me")
                    db.Users.create(req.body)
                        .then(dbModel => res.json(
                            {
                            message: "success register",
                            id: dbModel._id
                        })).catch(err => res.status(422).json(err));
                }
            });
    }
};