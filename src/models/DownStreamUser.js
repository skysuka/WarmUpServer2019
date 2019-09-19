// Author: K
// _DownStreamLogicProcess封装了distributeMarket(turn,oneTurnInputJSON)函数，这里引入后再exports。
// 添加了


const Sequelize = require('sequelize')
const config = require('../config.js')

require('./_DownStreamLogicProcess.js/index.js')


var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect, 
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        idle: config.pool.idle//?
    },
    timezone: config.timezone
});

var DownStreamUser = sequelize.define('downStreamUser', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    
    // name: {
    //     type: Sequelize.STRING(100),
    //     unique: true,
    //     allowNull: true
    // },
    // email: {
    //     type: Sequelize.STRING(100),
    //     allowNull: false
    // },
    
    password: Sequelize.STRING(50),
    isActivated: {
        type: Sequelize.INTEGER,
        defaultValue: 0 
    },
    user_id: {
        type: Sequelize.BIGINT,
    },
    
    phoneNum: Sequelize.JSON,
    
    totalStroageCost: Sequelize.INTEGER,
    xxx: Sequelize.FLOAT, //广告投入系数，暂时定为xxx
    currency: Sequelize.FLOAT,
    debt: Sequelize.FLOAT,


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
function addUser(id, password) {
    return User.create({
            id: id,
            password: password
        })
};


/**
 * 根据id查找用户
 */
function findUserById(id) {
    return DownStreamUser.findOne({
        where:{
            id:id
        }
    })
};

module.exports = {sync, addUser, findUserById, distributeMarket};