import { getUserByName, getUsers } from "../services/user.service";
import { log } from "../utils/common";
import { TaskInput } from "../utils/graphql-types";

export const resolvers = {
    Query: {
        user: async (args: { name: string }): Promise<any> => {
            try {
                const user = await getUserByName(args.name);

                return user;
            } catch (err) {
                log.error(err);
                throw err;
            }
        },
        users: async (): Promise<any> => {
            try {
                return await getUsers();
            } catch (err) {
                log.error(err);
                throw err;
            }
        },
        tasks: () => {

        }
    },
    Mutation: {
        newTask: async (parent, args: { taskInput: TaskInput }) => {
            try {
                //const newTask: Task = {
                //    taskId: args.taskInput.id,
                //    title: args.taskInput.title,
                //    description: args.taskInput.description,
                //    status: StatusEnum.TODO,
                //    tags: []
                //};
                //taskList.push(newTask);
                //const response: NewTaskResponse = {
                //    code: 200,
                //    success: true,
                //    message: "Task created",
                //    task: newTask
                //};
                //return response;
            } catch (err) {
                log.error(err.response.data);
                log.trace(err.stack);
                throw err.response.data;
            }
        },
    }
}