import mongoose from 'mongoose';
import { Task } from '../utils/graphQl-types'

export interface IUserDoc extends mongoose.Document {
    name: string,
    password: string,
    tasks: Task[]
}   

const userSchema = new mongoose.Schema<IUserDoc>(   
    {
        name: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TaskModel'
        }]
    }
);

export const UserModel = mongoose.model('UserModel', userSchema, 'TaskAppConnection');