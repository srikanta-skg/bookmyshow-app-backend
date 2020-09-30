const db = require("../models");
// console.log(db)
const event = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new event
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const eventinfo = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    event.create(eventinfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the event."
            });
        });
}

// Retrieve all event from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;
    event.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving event."
            });
        });
}

// Find a single event with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    event.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving event with id=" + id
            });
        });
};

// Update a event by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    event.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "event was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update event with id=${id}. Maybe event was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating event with id=" + id
            });
        });
};

// Delete a event with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    event.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "event was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete event with id=${id}. Maybe event was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete event with id=" + id
            });
        });
};

// Delete all event from the database.
exports.deleteAll = (req, res) => {
    event.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} event were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all event."
            });
        });
};

// Find all published event
exports.findAllPublished = (req, res) => {

    event.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving event."
            });
        });

};
