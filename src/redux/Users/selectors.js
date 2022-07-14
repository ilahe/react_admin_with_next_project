import { createSelector } from "reselect";

export const getUsersStateFromReducer = (state) => state.users;

export const getUsersList = createSelector(
    getUsersStateFromReducer,
    (store) => store?.usersList
);

export const setCreateUser = createSelector(
    getUsersStateFromReducer,
    (store) => store?.createUser
);

export const getUserEmail = createSelector(
    setCreateUser,
    (createUser) => createUser?.email
);
export const getUserFullName = createSelector(
    setCreateUser,
    (createUser) => createUser?.full_name
);
export const getUserUsername = createSelector(
    setCreateUser,
    (createUser) => createUser?.username
);
export const getUserPhone = createSelector(
    setCreateUser,
    (createUser) => createUser?.phone
);
export const getUserPassword = createSelector(
    setCreateUser,
    (createUser) => createUser?.password
);
export const getUserPassConfirmation = createSelector(
    setCreateUser,
    (createUser) => createUser?.password_confirmation
);
export const getUserErrorsList = createSelector(
    getUsersStateFromReducer,
    (store) => store?.errors
);
export const getUserRolesList = createSelector(
    setCreateUser, 
    (createUser) => {
    if (createUser?.roles?.length) {
        const roles = createUser?.roles?.map((item) => item.id);
        return roles;
    }
}
);
export const getPermissionsList = createSelector(
    setCreateUser,
    (createUser) => {
        if (createUser?.permissions?.length) {
            const permissions = createUser?.permissions?.map((item) => item.id);
            return permissions;
        }
    }
);
