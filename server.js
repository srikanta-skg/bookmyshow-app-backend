const fs = require("fs");
const {
  createDatabasesTable
} = require("./app/config/database");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// createDatabasesTable();

const db = require("./app/models");
// db.sequelize.sync();
// db.sequelize.sync({
//   force: true
// }).then(() => {
//   console.log("Drop and re-sync db.");
// });

db.sequelize.sync({ force: false , alter : true })

async function a() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
a()

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to BookmyShow application."
  });
});

require("./app/routes/extra.routes")(app, {});
require("./app/routes/events.routes")(app, {});
require("./app/routes/user.routes")(app, {});
require("./app/routes/city.routes")(app, {});
require("./app/routes/movie.routes")(app, {});
require("./app/routes/booking.routes")(app, {});
require("./app/routes/theater.routes")(app, {});
require("./app/routes/cityMovieJunction.routes")(app, {});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
