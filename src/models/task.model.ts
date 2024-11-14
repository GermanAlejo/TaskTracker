import mongose from 'mongoose';
import { StatusEnum, Tag } from '../utils/graphql-types';

export interface ITaskDoc extends mongose.Document {
    title: string;
    description: string;
    tags: Tag[],
    status: StatusEnum
}

const taskSchema = new mongose.Schema<ITaskDoc>(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: false,
        },
        tags: {
            type: [Tag],
            require: false
        },
        status: {
            type: String,
            enum: [StatusEnum.TODO, StatusEnum.WIP, StatusEnum.DONE],
            default: StatusEnum.TODO,
            require: true
        }
    }
);

export const TaskModel = mongose.model('TaskModel', taskSchema);