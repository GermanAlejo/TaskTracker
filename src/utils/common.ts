import { Logger } from "tslog";

export const log = new Logger();

export const PORT = 4000;

export const CONSTANTS_MSG = {
    CONNECTED_DB: "Connected to mongoDB",
    TEST_MESSAGE: "This is a test app, go to http://localhost:4000/graphql to test queries in graphql"
}

export const ERROR_CONSTANTS = {
    LAUNCH_ERROR: "Error launching server",
    DB_CONNECTION_ERROR: "Error Connecting to DB",
    DB_STRING_ERROR: "DB Connection string not defined",
    USER_NOT_FOUND_ERROR: "User not found",
    TASK_NOT_FOUND_ERROR: "Task not found"
}