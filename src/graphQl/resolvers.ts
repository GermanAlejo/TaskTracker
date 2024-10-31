import { taskList, userList } from "../testData/testData";

export const resolvers = {
    Query: {
        users: () => userList,
        tasks: () => taskList
    },
    Mutation: {
        newTask: async (parent, args) => {
            return newTaskService(args.id, args.title);
        }
    }
};

function newTaskService(id, title) {
    throw new Error("Function not implemented.");
}
