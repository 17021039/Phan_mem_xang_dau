const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');

const Contracts = sequelize.define('contracts', {
    // Model attributes are defined here
    contractID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    clientID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    signedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    expiredDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    }
  }, {
    // Other model options go here
    tableName: 'contracts',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Contracts;

// tạo contract
module.exports.created = (contractID_, signedDate_, clientID_, startDate_, expiredDate_, status_) => {
    Contracts.create({
        contractID: contractID_,
        clientID: clientID_,
        signedDate: signedDate_,
        startDate: startDate_,
        expiredDate: expiredDate_,
        status: status_
    });
}

// tạo contract bằng object
module.exports.set = (contract_ = {}) => {
    Contracts.create(contract_);
}

    // CÁC HÀM LẤY CỦA CONTRACT

// lấy tất cả contract (hợp đồng) theo yêu cầu
module.exports.get = (filter = {}) => {
    return Contracts.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
