const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const gql = require('graphql-tag');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');
const UserAPI = require('./datasources/datasource');

const port = 4002;

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      demoAPI: new UserAPI(),
    };
  },
});

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}).catch((err) => {
  console.error(err);
});
