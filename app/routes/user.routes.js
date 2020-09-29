module.exports = app => {

    const user = require("../controller/user.controller");


    var Userrouter = require("express").Router();

    // Create a new user
    Userrouter.post("/", user.create);

    // Retrieve all user
    Userrouter.get("/", user.findAll);

    // Retrieve all published user
    Userrouter.get("/published", user.findAllPublished);

    // Retrieve a single user with id
    Userrouter.get("/:id", user.findOne);

    // Update a user with id
    Userrouter.put("/:id", user.update);

    // Delete a user with id
    Userrouter.delete("/:id", user.delete);

    // Delete all user
    Userrouter.delete("/", user.deleteAll);


    app.use('/api/user', Userrouter);

};