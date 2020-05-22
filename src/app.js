import { GraphQLServer } from 'graphql-yoga';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { initMiddlewares } from './middlewares';

const server = new GraphQLServer({
  resolvers,
  typeDefs,
});

const { express } = server;
initMiddlewares(express);

export default server;
