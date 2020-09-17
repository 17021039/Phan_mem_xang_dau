const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');


const CreditContracts = sequelize.define('creditContracts', {
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
    debtCeiling: {
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
    tableName: 'credit_contracts',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = CreditContracts;

// tạo creditContract
module.exports.created = (contractID_, clientID_, debtCeiling_, creditRemain_) => {
    CreditContracts.create({
        contractID: contractID_,
        clientID: clientID_,
        debtCeiling: debtCeiling_,
        creditRemain: creditRemain_
    });
}

// tạo creditContract bằng object
module.exports.set = (creditContract_) => {
    CreditContracts.create(creditContract_);
}

        // CÁC HÀM LẤY CỦA CREDIT CLIENT

// lấy credit contract theo yêu cầu
module.exports.get = (filter = {}) => {
    return CreditContracts.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}
