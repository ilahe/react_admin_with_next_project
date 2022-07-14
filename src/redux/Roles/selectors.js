import { createSelector } from "reselect";

export const getRolesStateFromReducer = (state) => state.roles;

export const getRolesList = createSelector(
    getRolesStateFromReducer,
    (store) => store?.roles
);

export const setCreateRoles = createSelector(
    getRolesStateFromReducer,
    (store) => store?.createRole
);

export const getDisplayNameAz = createSelector(
    setCreateRoles,
    (createRole) => createRole?.display_name.az
);
export const getDisplayNameRu = createSelector(
    setCreateRoles,
    (createRole) => createRole?.display_name.ru
);
export const getName = createSelector(
    setCreateRoles,
    (createRole) => createRole?.name
);
export const getColor = createSelector(
    setCreateRoles,
    (createRole) => createRole?.color
);
export const getErrors = createSelector(
    getRolesStateFromReducer,
    (createRole) => createRole?.errors
);
export const getRolesPermissionsList = createSelector(
    setCreateRoles,
    (createRole) => {
        if (createRole?.permissions?.length) {
            const permissions = createRole?.permissions?.map((item) => item.id);
            return permissions;
        }
    }
);
