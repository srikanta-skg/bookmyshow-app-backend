const db = require("../models");
// console.log(db)
const movie = db.movies;
const Op = db.Sequelize.Op;

// Create and Save a new movie
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const movieInfo = {
        id: req.body.id,
        Title: req.body.Title,
        Director: req.body.Director,
        Runtime: req.body.Runtime,
        Genre: req.body.Genre,
        Rating: req.body.Rating,
        Metascore: req.body.Metascore,
        Votes: req.body.Votes,
        releasDate: req.body.releasDate,
        movie_img_url: req.body.movie_img_url,
    };

    movie.create(movieInfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the movie."
            });
        });
}

// Retrieve all movie from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? {
        id: {
            [Op.like]: `%${id}%`
        }
    } : null;
    movie.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving movie."
            });
        });
}

// Find a single movie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    movie.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with id=" + id
            });
        });
};

// Update a movie by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    movie.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update movie with id=${id}. Maybe movie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating movie with id=" + id
            });
        });
};

// Delete a movie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    movie.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete movie with id=${id}. Maybe movie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            });
        });
};

// Delete all movie from the database.
exports.deleteAll = (req, res) => {
    movie.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} movie were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all movie."
            });
        });
};

// Find all published movie
exports.findAllPublished = (req, res) => {

    movie.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving movie."
            });
        });

};
