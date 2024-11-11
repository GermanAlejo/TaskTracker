import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { log } from "../utils/common";
import "dotenv/config";

//glogal variables
export const collections: { tasks?: mongoDB.Collection } = {}

//Initalize connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONN_STRING}`);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const taksCollection: mongoDB.Collection = db.collection(`${process.env.TASK_COLLECTION_NAME}`);

  collections.tasks = taksCollection;

  log.info(`Successfully connected to database: ${db.databaseName} and collection: ${taksCollection.collectionName}`);
}