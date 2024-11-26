import express from "express";
import { Request, Response } from "express";
import cors from 'cors';
import { CONSTANTS_MSG, ERROR_CONSTANTS, log, PORT } from "./utils/common";
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers } from './graphql/resolvers';
import { readFileSync } from "fs";
import { connectToDatabase } from "./services/database.service";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send(CONSTANTS_MSG.TEST_MESSAGE);
});

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync(require.resolve('../data/taskSchema.graphQl')).toString('utf-8');

//start db and server
start(typeDefs, resolvers, app);

async function start(typeDefs: string, resolvers: any, expressApp: express.Application) {
  try {
    //run db in local
    await connectToDatabase();
    log.info(CONSTANTS_MSG.CONNECTED_DB);
    //start grapphql server
    await startApolloServer(typeDefs, resolvers, expressApp);
    log.info(`🚀 Server ready at http://localhost:${PORT}/`);
  } catch (err) {
    log.error(err);
    log.trace(err);
  }
}

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
async function startApolloServer(typeDefs: string, resolvers: any, expressApp: express.Application) {

  try {
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server: ApolloServer<BaseContext> = new ApolloServer({
      typeDefs,
      resolvers
    });

    // Required logic for integrating with Express
    await server.start();

    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    expressApp.use(
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
    return new Promise(resolve => app.listen({ port: PORT }));
  } catch (err) {
    log.error(ERROR_CONSTANTS.LAUNCH_ERROR);
    throw err;
  }
}


