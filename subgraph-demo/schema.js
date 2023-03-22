const typeDefs = `#graphql
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.4",
        import: ["@key"])

type Query {
  example: String
  thingDetails: Thing
  anotherDetails: Another
  productDetails: Product
}

type Thing @key(fields: "id") {
  id: ID!
  name: String!
  description: String!
}

type Another {
  stuff: String
}

interface Item @key(fields: "id") {
  id: ID!
  size: Int
  weight: Int
}

type Product implements Item @key(fields: "id") {
  id: ID!
  size: Int @external
  weight: Int @external
  cost: String @requires(fields: "size weight")
}
`;

module.exports = { typeDefs };
