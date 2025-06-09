const { Sequelize, sequelize } = require("../config/index");
const employeeModel = require("./employee"); // path to your model file

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.Employee = employeeModel(sequelize, Sequelize); // 👈 returns actual model

module.exports = db;
