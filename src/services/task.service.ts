import { findTaskByTitle, findTasks } from "../dao/task.dao";
import { ITaskDoc } from "../models/task.model";
import { StatusEnum } from "../utils/graphql-types";

export async function getTags() {
    return StatusEnum;
}

export async function getTasks(): Promise<any> {
    const tasks: ITaskDoc[] = await findTasks();
    return tasks;
}

export async function getTask(title: string): Promise<any> {
    const task: ITaskDoc = await findTaskByTitle(title);
    return task;
}