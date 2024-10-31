import { Task, User } from "../utils/graphQl-types";

export const UserList: User[] = [
    {
        userId: "1",
        name: "test",
        pass: "1234",
        tasks: []
    },
    {
        userId: "2",
        name: "test2",
        pass: "1234",
        tasks: []
    }
];

export const TaskList: Task[] = [
    {
        taskId: "1",
        title: "testTask",
        description: "testDesc",
        tags: []
    }
];