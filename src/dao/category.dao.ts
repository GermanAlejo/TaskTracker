import { CategoryModel, ICategoryDoc } from "../models/category.model";
import { ERROR_CONSTANTS, log } from "../utils/common";

export async function findCategoryByName(name: string): Promise<ICategoryDoc | Error> {

        const category: ICategoryDoc | null = await CategoryModel.findOne({ name }).exec();
    if(category) {
        return category;
    } else {
        return new Error(ERROR_CONSTANTS.CATEGORY_NOT_FOUND);
    }

}

export async function findCategories(): Promise<ICategoryDoc[] | Error> {

        const categories: ICategoryDoc[] = await CategoryModel.find().exec();
    if(categories) {
        return categories;
    } else {
        return new Error(ERROR_CONSTANTS.CATEGORY_NOT_FOUND);
    }
}