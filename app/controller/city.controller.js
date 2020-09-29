const db = require("../models");
// console.log(db)
const city = db.citys;
const Op = db.Sequelize.Op;

// Create and Save a new city
exports.create = (req, res) => {
    // Validate request
    if (!req.body.city_ID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const cityinfo = {
        city_ID: req.body.city_ID,
        city_Name: req.body.city_Name,
    };

    city.create(cityinfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the city."
            });
        });
}

// Retrieve all city from the database.
exports.findAll = (req, res) => {
    const city_ID = req.query.city_ID;
    var condition = city_ID ? {
        city_ID: {
            [Op.like]: `%${city_ID}%`
        }
    } : null;
    city.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
}

// Find a single city with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    city.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving city with id=" + id
            });
        });
};

// Update a city by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    city.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "city was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update city with id=${id}. Maybe city was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating city with id=" + id
            });
        });
};

// Delete a city with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    city.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "city was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete city with id=${id}. Maybe city was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete city with id=" + id
            });
        });
};

// Delete all city from the database.
exports.deleteAll = (req, res) => {
    city.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} city were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all city."
            });
        });
};

// Find all published city
exports.findAllPublished = (req, res) => {

    city.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });

};
