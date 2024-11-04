import { taskList, userList } from "../testData/testData";
import { log } from "../utils/common";
import { NewTaskResponse, StatusEnum, Task, TaskInput } from '../utils/graphQl-types';
export const resolvers = {
    Query: {
        users: () => userList,
        tasks: () => taskList
    },
    Mutation: {
        newTask: async (parent, args: { taskInput: TaskInput }): Promise<NewTaskResponse> => {
            try {
                const newTask: Task = {
                    taskId: args.taskInput.id,
                    title: args.taskInput.title,
                    description: args.taskInput.description,
                    status: StatusEnum.TODO,
                    tags: []
                };
                taskList.push(newTask);
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