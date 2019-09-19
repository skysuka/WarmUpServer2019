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

var User = sequelize.define('up_stream_user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: true
    },
    chip1Num: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    chip2Num: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    chip3Num: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    currency: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    debt: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    totalStorageCost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    T: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    TCost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    M: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    MCost: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
function addUser(userId) {
    return User.create({
        userId: userId
        })
};

async function produce(userId, data) {
    const result = await findUserByUserId(userId)
    const prev = result.dataValues
    chip1Num = Number(prev.chip1Num) + Number(data.chip1Num)
    chip2Num = prev.chip2Num + data.chip2Num
    chip3Num = prev.chip3Num + data.chip3Num
    TCost    = prev.TCost + data.TInvest
    MCost    = prev.MCost + data.MInvest
    return User.update({
        chip1Num,
        chip2Num,
        chip3Num,
        TCost,
        MCost
    }, {
        where: {userId: userId}
    })
}

/**
 * 根据name查找用户
 */
function findUserByUserId(userId) {
    return User.findOne({
        where:{
            userId: userId
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

module.exports = {sync, addUser, produce, findUserByUserId, findUserByEmail}