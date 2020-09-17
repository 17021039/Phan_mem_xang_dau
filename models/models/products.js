const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../connect/connection.js');
const { sync } = require('../../connect/connection.js');
// database connect
require('../../connect/connection.js');

const Products = sequelize.define('products', {
    // Model attributes are defined here
    productID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
  }, {
    // Other model options go here
    tableName: 'products',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_520_ci',
  });



module.exports = Products;

// tạo product
module.exports.created = (productID_, name_, unit_, price_) => {
    Products.create({
        productID: productID_,
        name: name_,
        unit: unit_,
        price: price_
    });
}

// tạo product bằng object
module.exports.set = (product_ = {}) => {
    Products.create(product_);
}

    // CÁC HÀM LẤY CỦA PRODUCT

// lấy tất cả product (xăng) theo yêu cầu
module.exports.get = (filter = {}) => {
    return Products.findAll({
        where: filter
    }).then(list => list.map(obj => obj.dataValues));
}

