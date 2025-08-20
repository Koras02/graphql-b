const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const app = express();

// 커스텀 타입 정의
const UserType = new GraphQLObjectType({
  name: "User", // 타입 이름
  description: "User Type", // 문서 설명
  fields: () => ({
    id: { type: GraphQLInt }, // 숫자형 id
    name: { type: GraphQLString }, // 문자열 name
    age: { type: GraphQLInt }, // 수자형 age
  }),
});

// 샘플 데이터
const users = [
  { id: 1, name: "철수", age: 20 },
  { id: 2, name: "영희", age: 25 },
  { id: 3, name: "재훈", age: 29 },
];

// RootQuery 정의
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: UserType, // 반환 타입 = User
      args: { id: { type: GraphQLInt } }, // id 인자 필요
      resolve: (parent, args) => users.find((u) => u.id === args.id),
    },
    users: {
      type: new GraphQLList(UserType), // 반환 타입 = [User]
      resolve: () => users,
    },
  }),
});

// 스키마 완성 + 서버 연결
const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// 서버 실행
app.listen(4000, () =>
  console.log("Server is running -> http://localhost:4000/graphql")
);
