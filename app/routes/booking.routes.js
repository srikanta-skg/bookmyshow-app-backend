module.exports = app => {

    const booking = require("../controller/booking.controller");

    var bookingrouter = require("express").Router();

    // Create a new booking
    bookingrouter.post("/", booking.create);

    // Retrieve all booking
    bookingrouter.get("/", booking.findAll);

    // Retrieve all published booking
    bookingrouter.get("/published", booking.findAllPublished);

    // Retrieve a single booking with id
    bookingrouter.get("/:id", booking.findOne);

    // Update a user with id
    bookingrouter.put("/:id", booking.update);

    // Delete a user with id
    bookingrouter.delete("/:id", booking.delete);

    // Delete all user
    bookingrouter.delete("/", booking.deleteAll);


    app.use('/api/booking', bookingrouter);

};