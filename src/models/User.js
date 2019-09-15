/*
 * @Description: 
 * @version: 
 * @Author: lqs
 * @Date: 2019-07-28 15:44:43
 * @LastEditTime: 2019-08-19 16:44:57
 */

const Sequelize = require('sequelize')
const config = require('../config.js')

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect, 
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        idle: config.pool.idle
    },
    timezone: config.timezone
});

var User = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: Sequelize.STRING(50),
    isActivated: {
        type: Sequelize.INTEGER,
        defaultValue: 0 
    }
}, {
    freezeTableName: true, // use singular table name
    timestamps: true
});

/**
 * 同步或更新数据库
 */
function sync() {
    User.sync({alter: true});
};

/**
 * 添加用户
 */
function addUser(email, password) {
    return User.create({
            email: email,
            password: password
        })
};

/**
 * 根据name查找用户
 */
function findUserByName(name) {
    return User.findOne({
        where:{
            name: name
        }
    })
};

/**
 * 根据email查找用户
 */
function findUserByEmail(email) {
    return User.findOne({
        where:{
            email: email
        }
    })
}

module.exports = {sync, addUser, findUserByName, findUserByEmail}