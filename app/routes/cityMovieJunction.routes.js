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
            // const useDatabase = `USE bmssubmit;`;
            const useDatabase = `USE heroku_067921c158de4d4;`;
            const ans = await runQuery1(useDatabase)
            const result = await executeQueryPromise(`select * from movies join cityMovieJunction on movies.id = cityMovieJunction.movieID join city on city.city_ID = cityMovieJunction.City_ID;`);
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

//  bookingID 
//  userID       
//  theaterID    
//  movieID       
//  paymentStatus 
//  seatNumber   
//  time       
//  createdAt   
//  updatedAt  

//                     city table

// city_ID     | int          | NO   | PRI | NULL    |       |
// | city_Name | varchar(255) | YES  |     | NULL    |       |
// | createdAt | datetime     | NO   |     | NULL    |       |
// | updatedAt | datetime     | NO   |     | NULL    |       |

//                     user 

// | user_id   | varchar(25)  | NO   | PRI | NULL    |       |
// | user_name | varchar(255) | YES  |     | NULL    |       |
// | password  | varchar(255) | YES  |     | NULL    |       |
// | createdAt | datetime     | NO   |     | NULL    |       |
// | updatedAt | datetime     | NO   |     | NULL    |       |
// +-----------+--------------+------+-----+---------+--

// theatre_id         | int          | NO   | PRI | NULL    | auto_increment |
// | theatre_Name     | varchar(255) | YES  |     | NULL    |                |
// | theatre_Location | varchar(255) | YES  |     | NULL    |                |
// | city_Id          | varchar(255) | YES  |     | NULL    |                |
// | createdAt        | datetime     | NO   |     | NULL    |                |
// | updatedAt        | datetime     | NO   |     | NULL    | 