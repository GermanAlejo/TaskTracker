import { IUserDoc, UserModel } from "../models/user.model";
import { ERROR_CONSTANTS, log } from "../utils/common";

export async function findUserByName(name: string): Promise<IUserDoc | Error> {

    const user: IUserDoc | null = await UserModel.findOne({ name }).exec();
    if (user) {
        return user;
    } else {
        return new Error(ERROR_CONSTANTS.USER_NOT_FOUND_ERROR);
    }
}

export async function findUsers(): Promise<IUserDoc[] | Error> {

    const users: IUserDoc[] = await UserModel.find().exec();
    if (users) {
        return users;
    } else {
        return new Error(ERROR_CONSTANTS.USER_NOT_FOUND_ERROR);
    }
}