module.exports = app => {

    const theater = require("../controller/theatre.controller");


    var theaterrouter = require("express").Router();

    // Create a new theater
    theaterrouter.post("/", theater.create);

    // Retrieve all theater
    theaterrouter.get("/", theater.findAll);

    // Retrieve all published theater
    theaterrouter.get("/published", theater.findAllPublished);

    // Retrieve a single theater with id
    theaterrouter.get("/:id", theater.findOne);

    // Update a theater with id
    theaterrouter.put("/:id", theater.update);

    // Delete a theater with id
    theaterrouter.delete("/:id", theater.delete);

    // Delete all theater
    theaterrouter.delete("/", theater.deleteAll);


    app.use('/api/theater', theaterrouter);

};