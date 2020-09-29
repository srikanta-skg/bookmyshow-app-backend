module.exports = async app => {

    const city = require("../controller/city.controller");

    var cityrouter = require("express").Router();

    // Create a new cityrouter
    cityrouter.post("/", city.create);

    // Retrieve all cityrouter
    cityrouter.get("/", city.findAll);

    // Retrieve all published cityrouter
    cityrouter.get("/published", city.findAllPublished);

    // Retrieve a single cityrouter with id
    cityrouter.get("/:id", city.findOne);

    // Update a user with id
    cityrouter.put("/:id", city.update);

    // Delete a user with id
    cityrouter.delete("/:id", city.delete);

    // Delete all user
    cityrouter.delete("/", city.deleteAll);


    app.use('/api/city', cityrouter);

};