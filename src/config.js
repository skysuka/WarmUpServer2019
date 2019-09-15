var Sequelize = require("sequelize");
 var config = {
    database: 'itp',
    username: 'root',
    password: 'rootroot',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00' 
 }

 module.exports = config;

