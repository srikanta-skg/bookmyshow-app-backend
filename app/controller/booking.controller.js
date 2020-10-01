const db = require("../models");
const booking = db.bookings;
const Op = db.Sequelize.Op;

// Create and Save a new booking
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const bookingInfo = {
        bookingID: req.body.bookingID,
        userID: req.body.userID,
        theaterID: req.body.theaterID,
        time: req.body.time,
        movieID: req.body.movieID,
        paymentStatus: req.body.paymentStatus,
        seatNumber: req.body.seatNumber,
    };

    booking.create(bookingInfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the booking."
            });
        });
}

// Retrieve all booking from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? {
        id: {
            [Op.like]: `%${bookingID}%`
        }
    } : null;
    booking.findAll({
            where: condition
        })
        .then(data => {
            // console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bookingID."
            });
        });
}

// Find a single booking with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    booking.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving booking with id=" + id
            });
        });
};

// Update a booking by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    booking.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "booking was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update booking with id=${id}. Maybe booking was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating booking with id=" + id
            });
        });
};

// Delete a booking with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    booking.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "booking was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete booking with id=${id}. Maybe booking was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete booking with id=" + id
            });
        });
};

// Delete all booking from the database.
exports.deleteAll = (req, res) => {
    booking.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({
                message: `${nums} booking were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all booking."
            });
        });
};

// Find all published booking
exports.findAllPublished = (req, res) => {

    booking.findAll({
            where: {
                published: true
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving booking."
            });
        });

};
