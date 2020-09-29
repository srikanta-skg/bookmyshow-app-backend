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
    router.get("/", extra.findAll);

    router.get("/all",
        async (req, res) => {
            const result = await executeQueryPromise(`SELECT * FROM extra LEFT JOIN tutorial on  extra.id = tutorial.id;`);
            if (result.length === 0) {
                return res.status(404).json(({
                    errorMsg: "No value found Found"
                }));
            } else {
                res.json(result);
            }
        });

    app.use('/api/extra', router);
}
// db.extras.findAll({
//     include: [db.tutorials]
// }).then(alluers => res.send(alluers)).catch(err => console.log(err))
