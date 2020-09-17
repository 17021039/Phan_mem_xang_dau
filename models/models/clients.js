const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');

const Clients = sequelize.define('clients', {
    // Model attributes are defined here
    clientID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taxID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    max_payment_limit: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
  }, {
    // Other model options go here
    tableName: 'clients',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Clients;

// tạo clients
module.exports.created = (clientID_, name_, address_, taxID_, max_payment_limit_) => {
    Clients.create({
        clientID: clientID_,
        name: name_,
        address: address_,
        taxID: taxID_,
        max_payment_limit: max_payment_limit_
    });
}

// tạo client bằng object
module.exports.set = (client_ = {}) => {
    Clients.create(client_);
}

    // CÁC HÀM LẤY CỦA CLIENT

// lấy tất cả client theo yêu cầu
module.exports.get = (filter = {}) => {
    return Clients.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
