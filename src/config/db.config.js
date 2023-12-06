// const mySQL = require('mysql');
const { Sequelize } = require('sequelize');


const db = new Sequelize(
  'bussiness',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql', // or your preferred database dialect
    port: 3306, // Add the port option
    logging: false, // Disable logging SQL queries (optional)
    define: {
      timestamps: true, // Adds createdAt and updatedAt columns to the tables (optional)
    },
    pool: {
      max: 10, // Maximum number of connection in pool (optional)
      min: 0, // Minimum number of connection in pool (optional)
      acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error (optional)
      idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released (optional)
    },
  }
);

module.exports = {
  db,
};
// const connectionString = {
//     connectionLimit : 100, 
//     host : 'localhost',
//     user : 'root',
//     password:'',
//     database:'bussiness',
//     debug:false,
//     port: 3306
// }
