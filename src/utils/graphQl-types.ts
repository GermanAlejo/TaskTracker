export type User = {
    userId: string,
    name: string,
    pass: string,
    tasks: Task[]
}

export type Task = {
    taskId: string,
    title: string,
    description: string,
    tags: Tag[],
    status: StatusEnum
}

export type Tag = {
    name: string
}

//Responses
export type NewTaskResponse = {
    code: string,
    success: boolean,
    message: string,
    task: Task
}

export enum StatusEnum {
    TODO = "To Do",
    WIP = "In progress",
    DONE = "Done"
}

//export interface MyContext {
//    dataSources: {
//        Users: User[];
//        Tasks: Task[];
//    };
//}