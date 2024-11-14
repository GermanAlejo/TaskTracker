import { Logger } from "tslog";
import { UserModel } from "../models/user.model";

export const log = new Logger();

export const PORT = 4000;

export async function saveDBData() {
    console.log("test");
    const user = new UserModel({
        name: 'Bill'
    });
    await user.save();
}