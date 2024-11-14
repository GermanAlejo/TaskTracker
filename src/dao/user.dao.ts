import { IUserDoc, UserModel } from "../models/user.model";
import { ERROR_CONSTANTS, log } from "../utils/common";

export async function findUserByName(name: string): Promise<IUserDoc> {
    try {
        const user: IUserDoc | null = await UserModel.findOne({ name }).exec();
        if (!user) {
            log.error(ERROR_CONSTANTS.USER_NOT_FOUND_ERROR);
            throw Error(ERROR_CONSTANTS.USER_NOT_FOUND_ERROR);
        }
        return user;
    } catch (err) {
        log.error(err);
        throw err;
    }
}

export async function findUsers() {
    try {
        const users: IUserDoc[] = await UserModel.find().exec();
        return users;
    } catch (err) {
        log.error(err);
        throw err;
    }
}