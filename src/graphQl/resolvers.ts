import { getTags, getTask, getTasks } from "../services/task.service";
import { getUserByName, getUsers } from "../services/user.service";
import { log } from "../utils/common";
import { TaskInput } from "../utils/graphql-types";

export const resolvers = {
    Query: {
        user: async (args: { name: string }): Promise<any> => {
            try {
                return await getUserByName(args.name);
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
        tags: async (): Promise<any> => {
            try {
                return await getTags();
            } catch (err) {
                log.error(err);
                throw err;
            }
        },
        task: async (args: { title: string }): Promise<any> => {
            try {
                return await getTask(args.title);
            } catch (err) {
                log.error(err);
                throw err;
            }
        },
        tasks: async () => {
            try {
                return await getTasks();
            } catch (err) {
                log.error(err);
                throw(err);
            }
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