const User = require("../shared/models/User"),
  Spec = require("../shared/models/Spec");

const Sequelize = require("sequelize");
const connection = new Sequelize(require("../config/config.json").development);

User.init(connection);
Spec.init(connection);

User.associate(connection.models);
Spec.associate(connection.models);

module.exports = connection;
