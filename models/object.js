module.exports.bill = (billID_, driverID_, clientID_, contractID_, gasStationID_, productID_, quantity_, total_, transactionDate_, status_) => {
    let bill = {};
    bill.billID = billID_;
    bill.driverID = driverID_;
    bill.clientID = clientID_;
    bill.contractID = contractID_;
    bill.gasStationID = gasStationID_;
    bill.productID = productID_;
    bill.quantity = quantity_;
    bill.total = total_;
    bill.transactionDate = transactionDate_;
    bill.status = status_;
    return bill;
}

module.exports.client = (clientID_, name_, address_, taxID_, max_payment_limit_) => {
    let client = {};
    client.clientID = clientID_;
    client.name = name_;
    client.address = address_;
    client.taxID = taxID_;
    client.max_payment_limit = max_payment_limit_;
    return client;
}

module.exports.contract = (contractID_, signedDate_, clientID_, startDate_, expiredDate_, status_) => {
    let contract = {};
    contract.contractID = contractID_;
    contract.clientID = clientID_;
    contract.signedDate = signedDate_;
    contract.startDate = startDate_;
    contract.expiredDate = expiredDate_;
    contract.status = status_;
    return contract;
}

module.exports.creditContract = (clientID_, contractID_, debtCeiling_, creditRemain_) => {
    let creditContract = {};
    creditContract.clientID = clientID_;
    creditContract.contractID = contractID_;
    creditContract.debtCeiling = debtCeiling_;
    creditContract.creditRemain = creditRemain_;
    return creditContract;
}

module.exports.creditDriver = (driverID_, contractID_, creditLimit_, creditRemain_) => {
    let creditDriver = {};
    creditDriver.driverID = driverID_;
    creditDriver.contractID = contractID_;
    creditDriver.creditLimit = creditLimit_;
    creditDriver.creditRemain = creditRemain_;
    return creditDriver;
}

module.exports.driver = (driverID_, clientID_, name_, residentID_, avatar_, phone_, address_, plate_, status_) => {
    let driver = {};
    driver.driverID = driverID_;
    driver.clientID = clientID_;
    driver.name = name_;
    driver.residentID = residentID_;
    driver.avatar = avatar_;
    driver.phone = phone_;
    driver.address = address_;
    driver.plate = plate_;
    driver.status = status_;
    return driver;
}

module.exports.gasStation = (gasStationID_, name_, address_, location_, workingTime_) => {
    let gasStation = {};
    gasStation.gasStationID = gasStationID_;
    gasStation.name = name_;
    gasStation.address = address_;
    gasStation.location = location_;
    gasStation.workingTime = workingTime_;
    return gasStation;
}

module.exports.product = (productID_, name_, unit_, price_) => {
    let product = {};
    product.productID = productID_;
    product.name = name_;
    product.unit = unit_;
    product.price = price_;
    return product;
}

module.exports.role = (roleID_, permission_) => {
    let role = {};
    role.roleID = roleID_;
    role.permission = permission_;
    return role;
}

module.exports.user = (userID_, username_, password_, roleID_) => {
    let user = {};
    user.userID = userID_;
    user.username = username_;
    user.password = password_;
    user.roleID = roleID_;
    return user;
}