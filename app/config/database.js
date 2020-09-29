const mysql = require("mysql2");
const config = require("./db.config.js");
const fs = require("fs");

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
});


connection.connect((err) => {
  if (err) throw err;
  console.log("Connected sucessfully!");
});



const runQuery1 = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) reject(err)
      resolve(rows);
    });
  })
}

const createDatabase = `CREATE DATABASE IF NOT EXISTS bmssubmit;`;
const useDatabase = `USE bmssubmit;`;
//   const createMatchTable=`CREATE TABLE MATCH_TABLE1( id INT NOT NULL,PRIMARY KEY (id));`;

const createDatabasesTable = () => {
  let promiseQueryArray = [];

  promiseQueryArray.push(runQuery1(createDatabase));
  promiseQueryArray.push(runQuery1(useDatabase));
  // promiseQueryArray.push(runQuery1(createMatchTable));

  let queryArray = Promise.all(promiseQueryArray);
  queryArray.then((data) => {
    return data;
  }).catch((error) => {
    console.log("createDatabasesTable error", error)
  });
}
module.exports = createDatabasesTable;


// eslint-disable-next-line no-unused-vars
const executeQueryPromise = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    })
  });
};

module.exports = {
  connection,
  executeQueryPromise,
  createDatabasesTable
}