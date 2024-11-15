import { findCategories, findCategoryByName } from "../dao/category.dao";
import { ICategoryDoc } from "../models/category.model";

export async function getCategory(name: string): Promise<ICategoryDoc | Error> {
    const category: ICategoryDoc | Error = await findCategoryByName(name);
    return category; 
}

export async function getCategories(): Promise<ICategoryDoc[] | Error> {
    const categories: ICategoryDoc[] | Error = await findCategories();
    return categories;
}