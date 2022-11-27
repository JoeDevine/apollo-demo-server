const { ApolloServer, AuthenticationError, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { readFileSync } = require("fs");

const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));
const resolvers = require("./resolvers");
const UserAPI = require("./datasources/datasource");

const port = 4002;
const subgraphName = "user demo";
o;
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      demoAPI: new UserAPI(),
    };
  },
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const userId = token.split(" ")[1]; // get the user name after 'Bearer '
    if (!userId)
      throw new AuthenticationError(
        "Error: no userId present, add Authorisation Header to request"
      ); // Demo auth error if no userId present
  },
});

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
