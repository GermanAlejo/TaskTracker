import { TaskList, UserList } from "../testData/testData";

export const resolvers = {
    Query: {
        getUsers: () => UserList,
        getTasks: () => TaskList
    },
};