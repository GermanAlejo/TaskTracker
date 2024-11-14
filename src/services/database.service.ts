import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import mongose, { ConnectOptions } from 'mongoose';
import { ERROR_CONSTANTS, log } from "../utils/common";
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
      await mongose.connect(process.env.DB_CONN_STRING, dbOptions);
    } else {
      log.error(ERROR_CONSTANTS.DB_STRING_ERROR);
      throw new Error(ERROR_CONSTANTS.DB_STRING_ERROR);
    }
  } catch (e) {
    log.error(ERROR_CONSTANTS.DB_CONNECTION_ERROR);
    throw e;
  }
}