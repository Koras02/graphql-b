const users = [
  { id: "1", name: "Sally", email: "Sally@example.com" },
  { id: "2", name: "Lilly", email: "Robot@example.com" },
];

const posts = [
  {
    id: "1",
    title: "GraphQL 이란?",
    content: "GraphQL의 기초를 알아보자",
    authorId: "1",
  },
  {
    id: "2",
    title: "React Redux를 알아보자",
    content: "Redux 사용법",
    authorId: "2",
  },
  {
    id: "3",
    title: "HTTP와 HTTPS의 차이점",
    content: "HTTP와 HTTP는 어떤 차이가 있을가",
    authorId: "3",
  },
];

const resolvers = {
  Query: {
    user: (parent, args) => {
      const { id } = args;
      return users.find((u) => u.id === id);
    },
    posts: (parent, args) => {
      let result = posts;
      if (args.authorId) {
        result = result.filter((p) => p.authorId === args.authorId);
      }
      if (args.limit) {
        result = result.slice(0, args.limit);
      }
      if (args.offset) {
        result = result.slice(args.offset);
      }
      return result;
    },
  },
  Mutation: {
    createUser: (parent, { input }) => {
      const newUser = { id: String(users.length + 1), ...input };
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = resolvers;
