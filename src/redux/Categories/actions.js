import {CategoriesType} from "../actionTypes";

export const getAllCategories = () =>({type:CategoriesType.GET_CATEGORIES});
export const putAllCategories = payload =>({type:CategoriesType.PUT_CATEGORIES,payload});
