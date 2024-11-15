import mongoose from "mongoose";
import { User } from '../utils/graphQl-types';

export interface ICategoryDoc extends mongoose.Document {
    name: string;
    owner: User;
}

const categorySchema = new mongoose.Schema<ICategoryDoc>(
    {
        name: {
            type: String,
            require: true
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'UserModel',
            require: true
        }
    }
);

export const CategoryModel = mongoose.model('CategoryModel', categorySchema);