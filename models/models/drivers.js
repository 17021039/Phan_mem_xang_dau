const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');


const Drivers = sequelize.define('drivers', {
    // Model attributes are defined here
    driverID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    clientID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    residentID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    plate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    // Other model options go here
    tableName: 'drivers',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Drivers;

// tạo drivers
module.exports.created = (driverID_, clientID_, name_, residentID_, avatar_, phone_, address_, plate_, status_) => {
    Drivers.create({
        driverID: driverID_,
        clientID: clientID_,
        name: name_,
        residentID: residentID_,
        avatar: avatar_,
        phone: phone_,
        address: address_,
        plate: plate_,
        status: status_
    });
}

// tạo drivers bằng object
module.exports.set = (driver_ = {}) => {
    Drivers.create(driver_);
}

    // CÁC HÀM LẤY CỦA DRIVER

// lấy tất cả driver (tài xế) theo yêu cầu
module.exports.get = (filter = {}) => {
    return Drivers.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
