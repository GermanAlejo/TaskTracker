import { findTaskByTitle, findTasks } from "../dao/task.dao";
import { ITaskDoc } from "../models/task.model";
import { StatusEnum } from "../utils/graphql-types";

export function getTags(): typeof StatusEnum {
    return StatusEnum
}

export async function getTasks(): Promise<ITaskDoc[]> {
    const tasks: ITaskDoc[] = await findTasks();
    return tasks;
}

export async function getTask(title: string): Promise<ITaskDoc> {
    const task: ITaskDoc = await findTaskByTitle(title);
    return task;
}