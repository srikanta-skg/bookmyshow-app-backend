module.exports = async app => {
    
    const event = require("../controller/events.controller");

    var router = require("express").Router();

    // Create a new event
    router.post("/", event.create);

    // Retrieve all event
    router.get("/", event.findAll);

    // Retrieve all published event
    router.get("/published", event.findAllPublished);

    // Retrieve a single event with id
    router.get("/:id", event.findOne);

    // Update a event with id
    router.put("/:id", event.update);

    // Delete a event with id
    router.delete("/:id", event.delete);

    // Delete all event
    router.delete("/", event.deleteAll);

    //create extra data
    // router.post("/extra", extra.create);

    // Retrieve all extra data
    // router.get("/extra", extra.findAll);

    app.use('/api/events', router);

};