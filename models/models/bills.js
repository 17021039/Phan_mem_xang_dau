const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');

const Bills = sequelize.define('bills', {
    // Model attributes are defined here
    billID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    driverID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clientID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contractID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gasStationID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    total: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    }
  }, {
    // Other model options go here
    tableName: 'bills',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });


module.exports = Bills;

// tạo bill
module.exports.created = (billID_, driverID_, clientID_, contractID_, gasStationID_, productID_, quantity_, total_, transactionDate_, status_) => {
    Bills.create({
        billID: billID_,
        driverID: driverID_,
        clientID: clientID_,
        contractID: contractID_,
        gasStationID: gasStationID_,
        productID: productID_,
        quantity: quantity_,
        total: total_,
        transactionDate: transactionDate_,
        status: status_
    });
}

// tạo bill bằng object
module.exports.set = (bill_ = {}) => {
    Bills.create(bill_);
}

    // CÁC HÀM LẤY CỦA BILL

// lấy tất cả bill theo yêu cầu
module.exports.get = (filter = {}) => {
    return Bills.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}

