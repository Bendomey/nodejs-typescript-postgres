import "graphql-iso-date";
import { ApolloServer } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "graphql-tools";

//domains
import { schemas, resolvers } from "../../domains";

const graphqlServer = () => {
  return new ApolloServer({
    typeDefs: mergeTypeDefs([...schemas]),
    resolvers: mergeResolvers([...resolvers]),
    introspection: true,
    playground: true,
    tracing: true,
  });
};

export default graphqlServer;
