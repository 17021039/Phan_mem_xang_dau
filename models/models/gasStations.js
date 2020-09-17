const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');

const GasStations = sequelize.define('gasStations', {
    // Model attributes are defined here
    gasStationID: {
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
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workingTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    // Other model options go here
    tableName: 'gas_stations',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = GasStations;

// tạo gasStation
module.exports.created = (gasStationID_, name_, address_, location_, workingTime_) => {
    GasStations.create({
        gasStationID: gasStationID_,
        name: name_,
        address: address_,
        location: location_,
        workingTime: workingTime_
    });
}

// tạo gasStation bằng object
module.exports.set = (gasStation_ = {}) => {
    GasStations.create(gasStation_);
}

    // CÁC HÀM LẤY CỦA GAS STATION

// lấy tất cả gas station (cửa hàng xăng dầu) theo yêu cầu
module.exports.get = (filter = {}) => {
    return GasStations.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
