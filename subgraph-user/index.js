const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { readFileSync } = require("fs");
const { KeyvAdapter } = require("@apollo/utils.keyvadapter");
const Keyv = require("keyv");
const gql = require("graphql-tag");

const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));
const resolvers = require("./resolvers");
const UserAPI = require("./datasources/datasource");

const port = 4002;

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  cache: new KeyvAdapter(new Keyv("redis://default:password@localhost:6379"))
});

startStandaloneServer(server, {
  listen: { port },
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        userAPI: new UserAPI({ cache })
      }
    };
  }
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
