const db = require("../models");

const theatre = db.theatres;
const Op = db.Sequelize.Op;

// Create and Save a new theatre
exports.create = (req, res) => {
    // Validate request
    if (!req.body.theatre_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const theatreinfo = {
        theatre_id: req.body.theatre_id,
        theatre_Name: req.body.theatre_Name,
        theatre_Location: req.body.theatre_Location,
        city_Id: req.body.city_Id,
    };

    theatre.create(theatreinfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the theatre."
            });
        });
}

// Retrieve all theatre from the database.
exports.findAll = (req, res) => {
    const theatre_Name = req.query.theatre_Name;
    var condition = theatre_Name ? {
        theatre_Name: {
            [Op.like]: `%${theatre_Name}%`
        }
    } : null;
    theatre.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving theatre."
            });
        });
}

// Find a single theatre with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    theatre.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving theatre with id=" + id
            });
        });
};

// Update a theatre by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    theatre.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "theatre was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update theatre with id=${id}. Maybe theatre was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating theatre with id=" + id
            });
        });
};

// Delete a theatre with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    theatre.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "theatre was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete theatre with id=${id}. Maybe theatre was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete theatre with id=" + id
            });
        });
};

// Delete all theatre from the database.
exports.deleteAll = (req, res) => {
    theatre.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} theatre were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all theatre."
            });
        });
};

// Find all published theatre
exports.findAllPublished = (req, res) => {

    theatre.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving theatre."
            });
        });
};
