import { HYDRATE } from "next-redux-wrapper";
import { PermissionTypes, RolesTypes } from "../actionTypes";

const initialState = {
    roles: [],
    createRole: {
        display_name: {
            az: "",
            ru: "",
        },
        name: "",
        color: "#000000",
        permissions: [],
    },
    errors: {},
};

const rolesReducer = function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.roles };
        }
        case RolesTypes.PUT_ALL_ROLES: {
            return { ...state, roles: action.payload };
        }
        case PermissionTypes.SET_PERMISSION_DATA: {
            const key = action.payload.key;
            if (key === "az") {
                return {
                    ...state,
                    createRole: {
                        ...state.createRole,
                        display_name: {
                            ...state.createRole.display_name,
                            az: action.payload.value,
                        },
                    },
                };
            }
            if (key === "ru") {
                return {
                    ...state,
                    createRole: {
                        ...state.createRole,
                        display_name: {
                            ...state.createRole.display_name,
                            ru: action.payload.value,
                        },
                    },
                };
            }
            return {
                ...state,
                createRole: {
                    ...state.createRole,
                    [key]: action.payload.value,
                },
            };
        }
        case RolesTypes.PUT_SINGLE_ROLE: {
            return { ...state, createRole: action.payload };
        }
        case RolesTypes.CLEAR_ROLES_PERMISSION_DATA: {
            return {
                ...state,
                createRole: { ...state.createRole, permissions: {} },
            };
        }
        case "TEST": {
            console.log(state);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default rolesReducer;
