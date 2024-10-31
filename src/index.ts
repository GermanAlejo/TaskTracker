import express from "express";
import { Request, Response } from "express";
import cors from 'cors';
import { log, PORT } from "./utils/common";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers } from './graphQl/resolvers';
import { readFileSync } from "fs";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send("This is a test app, go to http://localhost:4000/graphql to test queries in graphql");
});

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync(require.resolve('./graphQl/taskSchema.graphQl')).toString('utf-8');

startApolloServer(typeDefs, resolvers, app)
  .then(() => {
    log.info(`🚀 Server ready at http://localhost:${PORT}/`);
  })
  .catch(() => {
    log.error("Error launching server");
  });

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
async function startApolloServer(typeDefs: string, resolvers, app) {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  // Required logic for integrating with Express
  await server.start();

  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // Modified server startup
  return new Promise(resolve => app.listen({ port: PORT }, resolve));
  
}


