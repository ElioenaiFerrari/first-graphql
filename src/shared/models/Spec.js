const { Model, DataTypes } = require("sequelize");

class Spec extends Model {
  static init(sequelize) {
    super.init(
      {
        tech: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "owner" });
  }
}

module.exports = Spec;
