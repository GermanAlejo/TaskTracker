import { ITaskDoc, TaskModel } from "../models/task.model";
import { ERROR_CONSTANTS, log } from "../utils/common";

export async function findTaskByTitle(title: string): Promise<ITaskDoc | Error> {

    const user: ITaskDoc | null = await TaskModel.findOne({ title }).exec();
    if (user) {
        return user;
    } else {
        return new Error(ERROR_CONSTANTS.TASK_NOT_FOUND_ERROR);
    }
}

export async function findTasks(): Promise<ITaskDoc[] | Error> {

    const tasks: ITaskDoc[] = await TaskModel.find().exec();
    if (tasks) {
        return tasks;
    } else {
        return new Error(ERROR_CONSTANTS.TASK_NOT_FOUND_ERROR);
    }

}