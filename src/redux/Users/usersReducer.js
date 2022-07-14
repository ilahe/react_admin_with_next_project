import { UsersTypes } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    usersList: [],
    createUser: {
        full_name: "",
        email: "",
        username: "",
        phone: "",
        roles: {},
        password: "",
        password_confirmation: "",
        permissions: {},
    },
    errors: {},
};

const usersReducer = function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.users };
        }
        case UsersTypes.PUT_USERS: {
            return { ...state, usersList: action.payload };
        }
        case UsersTypes.SET_USERS_DATA_BY_KEY: {
            const key = action.payload.key;
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    [key]: action.payload.value,
                },
            };
        }
        case UsersTypes.SET_ERRORS: {
            if (action.payload) {
                const key = action.payload.key;
                return {
                    ...state,
                    errors: {
                        ...state.errors,
                        [key]: action.payload.value,
                    },
                };
            }
            return state;
        }
        case UsersTypes.CLEAR_ERRORS: {
            if (action.payload) {
                const key = action.payload.key;
                const filterErrors = Object.keys(state.errors).filter(
                    (el) => el !== key
                );
                const clearedObject = filterErrors.reduce((object, el) => {
                    object[el] = filterErrors[el];
                    return object;
                }, {});

                return {
                    ...state,
                    errors: clearedObject,
                };
            }
            return state;
        }
        case UsersTypes.PUT_SINGLE_ADMIN: {
            return { ...state, createUser: action.payload };
        }
        default:
            return state;
    }
};

export default usersReducer;
