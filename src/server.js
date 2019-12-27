const { GraphQLServer } = require("graphql-yoga"),
  resolvers = require("./api/resolvers");

require("./database");

const app = new GraphQLServer({
  typeDefs: require("path").join(__dirname, "api", "schema.graphql"),
  resolvers
});

app.start();
