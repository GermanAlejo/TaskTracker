import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import mongose, { ConnectOptions } from 'mongoose';
import { log } from "../utils/common";
import "dotenv/config";

//glogal variables
export const collections: { tasks?: mongoDB.Collection } = {}

//Initalize connection
export async function connectToDatabase() {
  try {
    dotenv.config();

    if(process.env.DB_CONN_STRING) {
      const dbOptions: ConnectOptions = {
        dbName: process.env.DB_NAME
      }
      mongose.connect(process.env.DB_CONN_STRING, dbOptions);
    } else {
      log.error("DB Connection string not defined");
      throw new Error("DB Connection string not defined");
    }
    

    //const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONN_STRING}`);
//
    //await client.connect();
//
    //const db: mongoDB.Db = client.db(process.env.DB_NAME);
//
    //const taksCollection: mongoDB.Collection = db.collection(`${process.env.TASK_COLLECTION_NAME}`);
//
    //collections.tasks = taksCollection;
//
    //log.info(`Successfully connected to database: ${db.databaseName} and collection: ${taksCollection.collectionName}`);
  } catch (e) {
    log.error("Error Connecting to DB");
    throw e;
  }
}