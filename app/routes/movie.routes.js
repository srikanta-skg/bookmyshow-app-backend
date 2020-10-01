const db = require("../models");
const fs = require("fs");
const {
    connection,
    runQuery1,
    executeQueryPromise
} = require('../config/database');

module.exports = app => {

    const movie = require("../controller/movie.controller");


    var movierouter = require("express").Router();

    // Create a new user
    movierouter.post("/", movie.create);

    movierouter.get("/all/:id", async (req, res) => {
        try {
            const useDatabase = `USE heroku_067921c158de4d4;`;
            // const useDatabase = `USE bmssubmit;`;
            const ans = await runQuery1(useDatabase)
            const result = await executeQueryPromise(`select * from movies Where movies.Title ="${req.params.id}";
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




    // Retrieve all user
    movierouter.get(`/`, movie.findAll);

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