const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');


const Users = sequelize.define('users', {
    // Model attributes are defined here
    userID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roleID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    tableName: 'users',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Users;

// tạo user
module.exports.created = (userID_, username_, password_, roleID_) => {
  Users.create({
    userID: userID_,
    username: username_,
    password: password_,
    roleID: roleID_
  });
}

// tạo user bằng object
module.exports.set = (user_ = {}) => {
  Users.create(user_);
}

  // CÁC HÀM LẤY CỦA USER

// lấy tất cả user (tài khoản đăng nhập) theo yêu cầu
module.exports.get =  (filter = {}) => {
  return Users.findAll({
    where: filter
  }).then(list => list.map(obj => obj.dataValues));
}
