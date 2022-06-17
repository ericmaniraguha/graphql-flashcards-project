import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const startServer = (): void => {
  new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => {
      const token: string = req.headers.authorization || '';
      return { token: token };
    },
  })
    .listen()
    .then(({ url }) => {
      console.log(`The server is running on ${url}`);
    });
};

export default startServer;
