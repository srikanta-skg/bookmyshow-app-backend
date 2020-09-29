module.exports = app => {

    const movie = require("../controller/movie.controller");


    var movierouter = require("express").Router();

    // Create a new user
    movierouter.post("/", movie.create);

    // Retrieve all user
    movierouter.get("/", movie.findAll);

    // Retrieve all published user
    movierouter.get("/published", movie.findAllPublished);

    // Retrieve a single user with id
    movierouter.get("/:id", movie.findOne);

    // Update a user with id
    movierouter.put("/:id", movie.update);

    // Delete a user with id
    movierouter.delete("/:id", movie.delete);

    // Delete all user
    movierouter.delete("/", movie.deleteAll);


    app.use('/api/movie', movierouter);

};