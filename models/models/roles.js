const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');


const Roles = sequelize.define('roles', {
    // Model attributes are defined here
    roleID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    permission: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    tableName: 'roles',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Roles;

// tạo role
module.exports.created = (roleID_, permission_) => {
  Roles.create({
    roleID: roleID_,
    permission: permission_
  });
}

// tạo role bằng object
module.exports.set = (role_ = {}) => {
  Roles.create(role_);
}

  // CÁC HÀM LẤY CỦA ROLE

// lấy tất cả role (quyền, loại người dùng) theo yêu cầu
module.exports.get = (filter = {}) => {
  return Roles.findAll({
    where: filter
  }).then(list => list.map(obj => obj.dataValues));
}
