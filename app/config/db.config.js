module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "gowda1633",
  DB: "bmssubmit",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};