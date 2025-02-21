const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
  } = require('graphql');

  // 가상 데이터
const users = [
    { id: '1', name: "John Doe", email: "abcd@abcd.com" },
    { id: '2', name: "Kanny" },
]

// UserType정의
const UserType = new GraphQLObjectType({
    name: "User", 
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});


// RootQuery 정의
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                // 데이터 베이스에 사용자 정보를 가져옴
                return users.find(user => user.id === args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
})

// Express 서버 생성
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("server is running port 4000");
    
})