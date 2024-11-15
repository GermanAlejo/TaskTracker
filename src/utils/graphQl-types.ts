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

export type Category = {
    categoryId: string,
    name: string,
    owner: User
}

export type Tag = {
    name: string
}

// Inputs
export type UserInput = {
    name: string,
    password: string
}

export type TaskInput = {
    title: string,
    description: string,
    tags: Tag[]
}

//Responses
export type NewUserResponse = {
    code: number,
    success: boolean,
    message: string,
    user: User
}

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
