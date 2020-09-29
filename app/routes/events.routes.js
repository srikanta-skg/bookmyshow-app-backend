module.exports = async app => {
    

    const tutorials = require("../controller/events.controller");

    

    var router = require("express").Router();

    // Create a new Tutorials
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    //create extra data
    // router.post("/extra", extra.create);

    // Retrieve all extra data
    // router.get("/extra", extra.findAll);

    app.use('/api/events', router);

};