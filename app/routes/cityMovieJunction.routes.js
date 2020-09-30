const db = require("../models");
const fs = require("fs");
const {
    connection,
    runQuery1,
    executeQueryPromise
} = require('../config/database');

module.exports = app => {

    const cityMovieJunction = require("../controller/cityMovieJunctionrouter.controller");
    var cityMovieJunctionrouter = require("express").Router();

    cityMovieJunctionrouter.get("/all", async (req, res) => {
        try {
            const useDatabase = `USE bmssubmit;`;
            const ans = await runQuery1(useDatabase)
     const result = await executeQueryPromise(`select * from movies join cityMovieJunction on movies.id = cityMovieJunction.movieID join city on city.city_ID = cityMovieJunction.City_ID;
`);
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

    // Create a new cityMovieJunction
    cityMovieJunctionrouter.post("/", cityMovieJunction.create);

    // Retrieve all cityMovieJunction
    cityMovieJunctionrouter.get("/", cityMovieJunction.findAll);

    // Retrieve all published cityMovieJunction
    cityMovieJunctionrouter.get("/published", cityMovieJunction.findAllPublished);

    // Retrieve a single cityMovieJunction with id
    cityMovieJunctionrouter.get("/:id", cityMovieJunction.findOne);

    // Update a cityMovieJunctionrouter with id
    cityMovieJunctionrouter.put("/:id", cityMovieJunction.update);

    // Delete a cityMovieJunctionrouter with id
    cityMovieJunctionrouter.delete("/:id", cityMovieJunction.delete);

    // Delete all cityMovieJunctionrouter
    cityMovieJunctionrouter.delete("/", cityMovieJunction.deleteAll);


    app.use('/api/cityMovie', cityMovieJunctionrouter);

};
