import { ITaskDoc, TaskModel } from "../models/task.model";
import { ERROR_CONSTANTS, log } from "../utils/common";

export async function findTaskByTitle(title: string): Promise<ITaskDoc> {
    try {
        const user: ITaskDoc | null = await TaskModel.findOne({ title }).exec();
        if (!user) {
            log.error(ERROR_CONSTANTS.TASK_NOT_FOUND_ERROR);
            throw Error(ERROR_CONSTANTS.TASK_NOT_FOUND_ERROR);
        }
        return user;
    } catch (err) {
        log.error(err);
        throw err;
    }
}

export async function findTasks(): Promise<ITaskDoc[]> {
    try {
        const tasks: ITaskDoc[] = await TaskModel.find().exec();
        return tasks;
    } catch (err) {
        log.error(err);
        throw err;
    }
}