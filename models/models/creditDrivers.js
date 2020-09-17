const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');


const CreditDrivers = sequelize.define('creditDrivers', {
    // Model attributes are defined here
    driverID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    contractID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    creditLimit: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    creditRemain: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
  }, {
    // Other model options go here
    tableName: 'credit_drivers',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = CreditDrivers;

// tạo creditDriver
module.exports.created = (driverID_, contractID_, creditLimit_, creditRemain_) => {
    CreditDrivers.create({
        driverID: driverID_,
        contractID: contractID_,
        creditLimit: creditLimit_,
        creditRemain: creditRemain_
    });
}


// tạo creditDriver bằng object
module.exports.set = (creditDriver_ = {}) => {
    CreditDrivers.create(creditDriver_);
}

    // CÁC HÀM LẤY CỦA CREDIT DRIVER

// lấy credit driver theo yêu cầu
module.exports.get = (filter = {}) => {
    return CreditDrivers.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
