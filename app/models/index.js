const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.events = require("./events.model.js")(sequelize, Sequelize)
db.extras = require("./extra.model.js")(sequelize, Sequelize)

db.citys = require("./city.model.js")(sequelize, Sequelize)
db.movies = require("./movie.model.js")(sequelize, Sequelize)
db.theatres = require("./theatre.model.js")(sequelize, Sequelize)
db.users = require("./user.model.js")(sequelize, Sequelize)
db.cityMovieJunctions = require("./city_movie.model.js")(sequelize, Sequelize)
db.bookings = require("./booking.model.js")(sequelize, Sequelize)

module.exports = db;