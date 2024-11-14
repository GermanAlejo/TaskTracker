import { findUserByName, findUsers } from '../dao/user.dao';
import { IUserDoc } from '../models/user.model';

export async function getUserByName(name: string): Promise<any> {
    const user: IUserDoc = await findUserByName(name);
    return user;
}

export async function getUsers(): Promise<any> {
    return await findUsers();
}