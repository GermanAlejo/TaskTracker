import { ITaskDoc, TaskModel } from "../models/task.model";
import { log } from "../utils/common";

export async function findTaskByTitle(title: string): Promise<ITaskDoc> {
    try {
        const user: ITaskDoc | null = await TaskModel.findOne({ title }).exec();
        if(!user) {
            log.error('Task not found');
            throw Error('Task not found in dao');
        }
        return user;
    } catch(err) {
        log.error(err);
        throw err;
    }
}

export async function findTasks() {
    try {
        const tasks: ITaskDoc[] = await TaskModel.find().exec();
        if(!tasks) {
            log.error('Error finding tasks');
            throw Error('Taks not found in dao');
        }
        return tasks;
    } catch(err) {
        log.error(err);
        throw err;
    }
}