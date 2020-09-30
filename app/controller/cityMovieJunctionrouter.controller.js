const db = require("../models");
// console.log(db)
const cityMovieJunction = db.cityMovieJunctions;
const Op = db.Sequelize.Op;

// Create and Save a new cityMovieJunction
exports.create = (req, res) => {
    // Validate request
    if (!req.body.movieID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const cityMovieJunctioninfo = {
        movieID: req.body.movieID,
        City_ID: req.body.City_ID,
    };

    cityMovieJunction.create(cityMovieJunctioninfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the cityMovieJunction."
            });
        });
}

// Retrieve all cityMovieJunction from the database.
exports.findAll = (req, res) => {
    const movieID = req.query.movieID;
    var condition = movieID ? {
        movieID: {
            [Op.like]: `%${movieID}%`
        }
    } : null;
    cityMovieJunction.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving evcityMovieJunctionent."
            });
        });
}

// Find a single cityMovieJunction with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    cityMovieJunction.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving cityMovieJunction with id=" + id
            });
        });
};

// Update a cityMovieJunction by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    cityMovieJunction.update(req.body, {
            where: {
                movieID: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "cityMovieJunction was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update cityMovieJunction with id=${id}. Maybe cityMovieJunction was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating cityMovieJunction with id=" + id
            });
        });
};

// Delete a cityMovieJunction with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    cityMovieJunction.destroy({
            where: {
                movieID: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "cityMovieJunction was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete cityMovieJunction with id=${id}. Maybe cityMovieJunction was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete cityMovieJunction with id=" + id
            });
        });
};

// Delete all cityMovieJunction from the database.
exports.deleteAll = (req, res) => {
    cityMovieJunction.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} cityMovieJunction were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all cityMovieJunction."
            });
        });
};

// Find all published cityMovieJunction
exports.findAllPublished = (req, res) => {

    cityMovieJunction.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving cityMovieJunction."
            });
        });

};
