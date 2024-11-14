import { IUserDoc, UserModel } from "../models/user.model";
import { log } from "../utils/common";

export async function findUserByName(name: string): Promise<IUserDoc> {
    try {
        const user: IUserDoc | null = await UserModel.findOne({ name }).exec();
        if(!user) {
            log.error('User not found');
            throw Error('User not found in dao');
        }
        return user;
    } catch(err) {
        log.error(err);
        throw err;
    }
}

export async function findUsers() {
    try {
        const users: IUserDoc[] = await UserModel.find().exec();
        if(!users) {
            log.error('Error finding users');
            throw Error('Users not found in dao');
        }
        return users;
    } catch(err) {
        log.error(err);
        throw err;
    }
}