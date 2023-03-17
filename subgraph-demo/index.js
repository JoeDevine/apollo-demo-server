const { ApolloServer, AuthenticationError } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { typeDefs } = require('./schema');
const resolvers = require('./resolvers');
const DemoAPI = require('./datasources/datasource');

console.log('typeDefs', typeDefs);

const port = 4001;

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      demoAPI: new DemoAPI(),
    };
  },
  // context: async ({ req }) => {
  //   const token = req.headers.authorization || "";
  //   const userId = token.split(" ")[1]; // get the user name after 'Bearer '
  //   if (!userId)
  //     throw new AuthenticationError(
  //       "Error: no userId present, add Authorisation Header to request"
  //     ); // Demo auth error if no userId present
  // },
});

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
