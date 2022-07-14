import { createSelector } from "reselect";

export const getPermissionsStateFromReducer = state => state.permissions;

export const getPermissionsList = createSelector(
    getPermissionsStateFromReducer,
    store => store?.permissionList,
)
