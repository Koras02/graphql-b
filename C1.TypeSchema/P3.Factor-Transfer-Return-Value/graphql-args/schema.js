const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    authorId: ID!
  }

  type Query {
    # 단일 인자
    user(id: ID!): User

    # 여러 인자
    posts(authorId: ID, limit: Int, offset: Int): [Post]
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;

module.exports = typeDefs;
