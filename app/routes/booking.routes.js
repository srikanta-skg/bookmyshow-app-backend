const db = require("../models");
const fs = require("fs");
const {
    connection,
    runQuery1,
    executeQueryPromise
} = require('../config/database');

module.exports = app => {

    const booking = require("../controller/booking.controller");

    var bookingrouter = require("express").Router();

    // Create a new booking
    bookingrouter.post("/", booking.create);

    bookingrouter.get("/all", async (req, res) => {
        try {
            const useDatabase = `USE heroku_067921c158de4d4;`;
            // const useDatabase = `USE bmssubmit;`;
            const ans = await runQuery1(useDatabase)
            const result = await executeQueryPromise(`select * from booking JOIN theatre ON booking.theaterID = 
            theatre.theatre_id JOIN movies on  booking.theaterID = movies.id;
            ;`);
            if (result.length === 0) {
                return res.status(404).json(({
                    errorMsg: "No value found Found"
                }));
            } else {
                res.json(result);
            }

        } catch (error) {
            console.log(error)
            return res.status(404).json(({
                errorMsg: "Request Not Found"
            }));
        }
    })

    
    bookingrouter.get("/all/:id", async (req, res) => {
        try {
            // const useDatabase = `USE heroku_067921c158de4d4;`;
            const useDatabase = `USE bmssubmit;`;
            const ans = await runQuery1(useDatabase)
            const result = await executeQueryPromise(` select * from booking JOIN theatre ON booking.theaterID
             = theatre.theatre_id JOIN movies on  booking.theaterID = movies.id WHERE userID = "${req.params.id}";
            ;`);
            if (result.length === 0) {
                return res.status(404).json(({
                    errorMsg: "No value found Found"
                }));
            } else {
                res.json(result);
            }

        } catch (error) {
            console.log(error)
            return res.status(404).json(({
                errorMsg: "Request Not Found"
            }));
        }
    })

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