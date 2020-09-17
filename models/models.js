const { Sequelize} = require('sequelize');

const Bills = require('./models/bills.js');
const Clients = require('./models/clients.js');
const Contracts = require('./models/contracts.js');
const CreditContracts = require('./models/creditContracts.js');
const CreditDrivers = require('./models/creditDrivers.js');
const Drivers = require('./models/drivers.js');
const GasStations = require('./models/gasStations.js');
const Products = require('./models/products.js');
const Roles = require('./models/roles.js');
const Users = require('./models/users.js');



// hàm tạo các quan hệ của bill và xuất bill
module.exports.bills = () => {
    Bills.belongsTo(Clients, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Bills.belongsTo(Drivers, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Bills.belongsTo(Contracts, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Bills.belongsTo(GasStations, {
        foreignKey: { name: "gasStationID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Bills.belongsTo(Products, {
        foreignKey: { name: "productID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Bills;
}

// hàm tạo các quan hệ của client và xuất client
module.exports.clients = () => {
    Clients.hasMany(Bills, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Clients.belongsTo(Users, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Clients.hasMany(Contracts, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Clients.hasMany(Drivers, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Clients.hasMany(CreditContracts, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Clients;
}

// hàm tạo các quan hệ của contract và xuất contract
module.exports.contracts = () => {
    Contracts.belongsTo(Clients, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Contracts.hasOne(CreditContracts, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Contracts.belongsToMany(Drivers, {
        through: "creditDrivers",
        foreignKey: { name: "contractID" },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Contracts.hasMany(Bills, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Contracts;
}

// hàm tạo các quan hệ của credit clients và xuất credit clients
module.exports.creditContracts = () => {
    CreditContracts.belongsTo(Clients, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    CreditContracts.belongsTo(Contracts, {
        foreignKey: { name: "contractID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return CreditContracts;
}

// hàm tạo các quan hệ của credit drivers và xuất credit drivers
module.exports.creditDrivers = () => {
    return CreditDrivers;
}

// hàm tạo các quan hệ của driver và xuất driver
module.exports.drivers = () => {
    Drivers.belongsTo(Users, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Drivers.belongsTo(Clients, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Drivers.belongsToMany(Contracts, {
        through: "creditDrivers",
        foreignKey: { name: "driverID" },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Drivers.hasMany(Bills, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Drivers;
}

// hàm tạo các quan hệ của gas station và xuất gas station
module.exports.gasStations = () => {
    GasStations.belongsTo(Users, {
        foreignKey: { name: "gasStationID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    GasStations.hasMany(Bills, {
        foreignKey: { name: "gasStationID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return GasStations;
}

// hàm tạo các quan hệ của user và xuất user
module.exports.users = () => {
    Users.belongsTo(Roles, {
        foreignKey: { name: "roleID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Users.hasOne(Clients, {
        foreignKey: { name: "clientID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Users.hasOne(GasStations, {
        foreignKey: { name: "gasStationID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    Users.hasOne(Drivers, {
        foreignKey: { name: "driverID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Users;
}

// hàm tạo các quan hệ của role và xuất role
module.exports.roles = () => {
    Roles.hasMany(Users, {
        foreignKey: { name: "roleID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Roles;
}

// hàm tạo các quan hệ của product và xuất product
module.exports.products = () => {
    Products.hasMany(Bills, {
        foreignKey: { name: "productID"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
    return Products;
}