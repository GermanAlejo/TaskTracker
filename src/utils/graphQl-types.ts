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

// Inputs
export type TaskInput = {
    id: string,
    title: string,
    description: string,
    tags: Tag[]
}

//Responses
export type NewTaskResponse = {
    code: number,
    success: boolean,
    message: string,
    task: Task
}

export enum StatusEnum {
    TODO = "To Do",
    WIP = "In progress",
    DONE = "Done"
}
