const User = require("../shared/models/User"),
  Spec = require("../shared/models/Spec");

module.exports = {
  Query: {
    user(_, { id }) {
      return User.findByPk(id);
    },
    users() {
      return User.findAll();
    },
    specs() {
      return Spec.findAll({
        include: ["owner"]
      });
    }
  },

  Mutation: {
    createUser(_, { name, email, password }) {
      return User.create({ name, email, password });
    },
    createSpec(_, { tech, user_id }) {
      return Spec.create({ tech, user_id });
    }
  }
};
