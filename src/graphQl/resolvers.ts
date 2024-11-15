import { ICategoryDoc } from "../models/category.model";
import { ITaskDoc } from "../models/task.model";
import { IUserDoc } from "../models/user.model";
import { getCategories, getCategory } from "../services/category.service";
import { getTags, getTask, getTasks } from "../services/task.service";
import { getUserByName, getUsers } from "../services/user.service";
import { log } from "../utils/common";
import { NewTaskResponse, NewUserResponse, StatusEnum, Task, TaskInput, User, UserInput } from "../utils/graphQl-types";

export const resolvers = {
    Query: {
        user: async (args: { name: string }): Promise<IUserDoc> => {
            try {
                const user: IUserDoc | Error = await getUserByName(args.name);
                if(user instanceof Error) {
                    throw user;
                } else {
                    return user;
                }
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw err;
            }
        },
        users: async (): Promise<IUserDoc[]> => {
            try {
                const users: IUserDoc[] | Error = await getUsers();
                if(users instanceof Error) {
                    throw users;
                }
                return users;
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw err;
            }
        },
        tags: async (): Promise<typeof StatusEnum> => {
            try {
                return getTags();
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw err;
            }
        },
        task: async (args: { title: string }): Promise<ITaskDoc> => {
            try {
                const task: ITaskDoc | Error = await getTask(args.title);
                if(task instanceof Error) {
                    throw task;
                }
                return task;
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw err;
            }
        },
        tasks: async (): Promise<ITaskDoc[]> => {
            try {
                const tasks: ITaskDoc[] | Error = await getTasks();
                if(tasks instanceof Error) {
                    throw tasks;
                }
                return tasks;
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw(err);
            }
        },
        category: async (args: { name: string }): Promise<ICategoryDoc> => {
            try {
                const category: ICategoryDoc | Error = await getCategory(args.name);
                if(category instanceof Error) {
                    throw category;
                }
                return category;
            } catch (err) {
                log.error(err);
                log.trace(err);
                throw(err);
            }
        },
        categories: async (): Promise<ICategoryDoc[]> => {
            try {
                const categories: ICategoryDoc[] | Error = await getCategories();
                if(categories instanceof Error) {
                    throw categories;
                }
                return categories;
            } catch(err) {
                log.error(err);
                log.trace(err.stack);
                throw(err);
            }
        }
    },
    Mutation: {
        newUser: async (parent, args: {userInput: UserInput }) => {
            try {
                const newUser: User = {
                    userId: "",
                    name: args.userInput.name,
                    pass: args.userInput.password,
                    tasks: []
                }
                //call service layer here
                //set up response
                const response: NewUserResponse = {
                    code: 200,
                    success: true,
                    message: "User created",
                    user: newUser
                }
                return response;
            } catch (err) {
                log.error(err.response.data);
                log.trace(err.stack);
                throw err;
            }
        },
        newTask: async (parent, args: { taskInput: TaskInput }) => {
            try {
                const newTask: Task = {
                    taskId: "",
                    title: args.taskInput.title,
                    description: args.taskInput.description,
                    status: StatusEnum.TODO,
                    tags: []
                };
                //call here for service layer
                //set up response
                const response: NewTaskResponse = {
                    code: 200,
                    success: true,
                    message: "Task created",
                    task: newTask
                };
                return response;
            } catch (err) {
                log.error(err.response.data);
                log.trace(err.stack);
                throw err.response.data;
            }
        },
    }
}