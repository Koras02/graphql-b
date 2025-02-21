const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL 스키마 정의
const schema = buildSchema(`
    type Query {
        hello: String  
        user(id: ID!): User
    }   
    type User {
        id: ID!
        name: String!
        age: Int!
    }
        
  
`);

const users = [
  { id: "1", name: "Koras02", age: 27 },
  { id: "2", name: "Bruce", age: 35 },
];

// Resolver 함수 정의
const root = {
  hello: () => "Hello World GraphQL!",
  user: ({ id }) => users.find((user) => user.id === id),
};

// Express 서버 생성
const app = express();

// GraphQL 미들웨어 생성
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GraphQL 도구 활성화
  })
);

// 서버 실행
app.listen(4000, () => {
  console.log("GraphQL Server http://localhost:4000/graphQL ! Success");
});
