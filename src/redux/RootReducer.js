import { combineReducers } from "redux";
import signInReducer from "./signIn/signInReducer";
import permissionsReducer from "./Permissions/permissionsReducer";
import rolesReducer from "./Roles/rolesReducer";
import usersReducer from "./Users/usersReducer";
import customerReducer from "./Customer/customersReducer";
import CategoriesReducer from "./Categories/categoriesReducer";
import loaderReducer from "./Loader/loaderReducer";

const RootReducer = combineReducers({
    signIn: signInReducer,
    permissions: permissionsReducer,
    roles: rolesReducer,
    users: usersReducer,
    customers: customerReducer,
    categories:CategoriesReducer,
    loading: loaderReducer,
});

export default RootReducer;
