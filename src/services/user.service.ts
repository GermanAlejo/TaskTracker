import { findUserByName, findUsers } from '../dao/user.dao';
import { IUserDoc } from '../models/user.model';

export async function getUserByName(name: string): Promise<IUserDoc | Error> {
    const user: IUserDoc | Error = await findUserByName(name);
    return user;
}

export async function getUsers(): Promise<IUserDoc[] | Error> {
    const users: IUserDoc[] | Error = await findUsers();
    return users;
}