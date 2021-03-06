const db = require("../models");
const fs = require("fs");
const {
    executeQueryPromise
} = require('../config/database');


module.exports = async app => {
    const extra = require("../controller/extra.controller")
    var router = require("express").Router();
    //create extra data
    router.post("/", extra.create);
    // Retrieve all extra data
    
    router.get("/all",
        async (req, res) => {
            const result = await executeQueryPromise(`SELECT * FROM extra `);
            if (result.length === 0) {
                return res.status(404).json(({
                    errorMsg: "No value found Found"
                }));
            } else {
                console,log(result, "this is the result")
                res.json(result);
                 res.end();
            }
        });

        router.get("/", extra.findAll);
    app.use('/api/extra', router);
}
// db.extras.findAll({
//     include: [db.tutorials]
// }).then(alluers => res.send(alluers)).catch(err => console.log(err))
