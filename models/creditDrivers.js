const { Sequelize, DataTypes} = require('sequelize');
const { sync } = require('../connect/connection.js');
// database connect
require('../connect/connection.js');

const creditDrivers = sequelize.define('creditDrivers', {
    // Model attributes are defined here
    driverID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contractID: {
        type: DataTypes.STRING,
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

  module.exports = creditDrivers;
