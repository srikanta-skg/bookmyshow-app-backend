const db = require("../models");
// console.log(db)
const extra = db.extras;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.rating) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const event_extra = {
        rating: req.body.rating,
        voting: req.body.voting,
        tutorial_id: req.body.tutorial_id,
        location: req.body.location
    };

    extra.create(event_extra)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
}

exports.findAll = (req, res) => {
    const rating = req.query.rating;
    var condition = rating ? {
        rating: {
            [Op.like]: `%${rating}%`
        }
    } : null;
    extra.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
}