import { PermissionTypes, RolesTypes } from "../actionTypes";

export const getAllRoles = () => ({
    type: RolesTypes.GET_ALL_ROLES,
});
export const putAllRoles = (roles) => ({
    type: RolesTypes.PUT_ALL_ROLES,
    payload: roles,
});

export const setRolesData = (payload) => ({
    type: PermissionTypes.SET_PERMISSION_DATA,
    payload,
});

export const setRolesToApi = () => ({ type: RolesTypes.SET_TO_API });

export const getSingleRole = (payload) => ({
    type: RolesTypes.GET_SINGLE_ROLE,
    payload,
});

export const putSingleRole = (payload) => ({
    type: RolesTypes.PUT_SINGLE_ROLE,
    payload,
});

export const setEditSingleRoleToApi = (id) => ({
    type: RolesTypes.SET_EDIT_SINGLE_ROLE,
    id,
});

export const setDeleteSingleRole = (id) => ({
    type: RolesTypes.SET_DELETE_SINGLE_ROLE,
    id,
});
export const clearRolesPermissions = () => ({
    type: RolesTypes.CLEAR_ROLES_PERMISSION_DATA,
});
