import { PermissionTypes } from "../actionTypes";

export const getPermission = () => ({
    type: PermissionTypes.GET_PERMISSIONS,
});

export const postPermission = (payload) => ({
    type: PermissionTypes.POST_PERMISSION,
    payload,
});

export const putPostPermission = (payload) => ({
    type: PermissionTypes.PUT_POST_PERMISSION,
    payload,
});
export const putGetPermission = (payload) => ({
    type: PermissionTypes.PUT_GET_PERMISSIONS,
    payload,
});

export const changeStatus = (payload) => ({
    type: PermissionTypes.CHANGE_STATUS,
    payload,
});

export const selectAllStatuses = () => ({
    type: PermissionTypes.SELECT_ALL_STATUSES,
});

export const clearPermissionData = () => ({
    type: PermissionTypes.CLEAR_PERMISSION_DATA,
});
