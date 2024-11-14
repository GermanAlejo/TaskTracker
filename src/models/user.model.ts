import { Schema, Document, model } from 'mongoose';

export interface IUserDoc extends Document {
    name: string,
    password: string,
}   

const userSchema = new Schema<IUserDoc>(   
    {
        name: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        }
    }
);

export const UserModel = model('UserModel', userSchema, 'TaskAppConnection');