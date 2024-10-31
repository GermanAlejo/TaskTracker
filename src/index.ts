import express from "express";
import { Request, Response } from "express";
import { log, PORT } from "./utils/common";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema as typeDefs } from './graphQl/schema';
import { resolvers } from './graphQl/resolvers';

const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response): Promise<any> => {
    return res.status(200).send("This is a test app, go to http://localhost:4000/ to test queries in graphql");
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(port => {
    console.log(`🚀  Server ready at: ${port.url}`);
  });

app.listen(PORT, () => {
    log.info(`SERVER is running on port ${PORT}`);
});

