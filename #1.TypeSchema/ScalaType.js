const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    number: Int
    isAwesome: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
    number: () => 123,
    isAwesome: () => true,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🧑🏾‍🚀 Server is running: ${url}`);
});
