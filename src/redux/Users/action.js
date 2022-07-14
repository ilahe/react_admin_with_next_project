import { UsersTypes } from "../actionTypes";

export const setUsersList = () => ({
    type: UsersTypes.GET_USERS,
});

export const putUsersList = (users) => ({
    type: UsersTypes.PUT_USERS,
    payload: users,
});

export const setUsersDataByKey = (payload) => ({
    type: UsersTypes.SET_USERS_DATA_BY_KEY,
    payload,
});

export const setUserPost = () => ({
    type: UsersTypes.SET_POST_USER,
});
export const getSingleAdmin = (id) => ({
    type: UsersTypes.GET_SINGLE_ADMIN,
    id,
});
export const setEditSingleAdminToApi = (id) => ({
    type: UsersTypes.SET_EDIT_SINGLE_ADMIN,
    id,
});
export const setIsToggleBlockSingleAdmin = (id) => ({
    type: UsersTypes.SET_TOGGLE_BLOCK_SINGLE_ADMIN,
    id,
});
export const putSingleAdmin = (payload) => ({
    type: UsersTypes.PUT_SINGLE_ADMIN,
    payload,
});
export const setUserErrors = (payload) => ({
    type: UsersTypes.SET_ERRORS,
    payload,
});

export const clearUserErrors = (payload) => ({
    type: UsersTypes.CLEAR_ERRORS,
    payload,
});
