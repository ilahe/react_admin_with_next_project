import {HYDRATE} from "next-redux-wrapper";
import {CategoriesType} from "../actionTypes";
const initialState = {
    categories:[]
};
const categoriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.categories };
        }
        case CategoriesType.PUT_CATEGORIES:{
            return {...state, categories:action.payload};
        }
        default:{
            return state
        }
    }
};
export default categoriesReducer;
