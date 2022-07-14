import { createSelector } from "reselect";

export const getCategoriesStateFromReducer = (state) => state.categories;

export const getCategoriesList = createSelector(
    getCategoriesStateFromReducer,
    (store) => store?.categories
);
