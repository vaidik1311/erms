const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.PG_DB_URI, {
  dialect: "postgres",
  logging: false,
});

module.exports = {
  Sequelize,
  sequelize,
};
