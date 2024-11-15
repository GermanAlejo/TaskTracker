import { findTaskByTitle, findTasks } from "../dao/task.dao";
import { ITaskDoc } from "../models/task.model";
import { StatusEnum } from "../utils/graphQl-types";

export function getTags(): typeof StatusEnum {
    return StatusEnum
}

export async function getTasks(): Promise<ITaskDoc[] | Error> {
    const tasks: ITaskDoc[] | Error = await findTasks();
    return tasks;
}

export async function getTask(title: string): Promise<ITaskDoc | Error> {
    const task: ITaskDoc | Error = await findTaskByTitle(title);
    return task;
}