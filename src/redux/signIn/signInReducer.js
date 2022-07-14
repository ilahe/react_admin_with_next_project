import { HYDRATE } from "next-redux-wrapper";
import { LogInTypes } from "../actionTypes";
import { setSession, setUser } from "../../helpers";

const initialState = {
    username: "",
    token: "",
    error: false,
    isLoggedIn: true,
};

const LoginReducer = function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.signIn };
        }
        case LogInTypes.PUT_SIGN_IN: {
            const username = action.payload.user.username;
            const token = action.payload.access_token;
            setUser(username);
            return { ...state, username: username, token: token };
        }
        case LogInTypes.PUT_SIGN_IN_ERROR: {
            return { ...state, error: true };
        }
        case LogInTypes.PUT_CHECK_TOKEN_ERROR: {
            return { ...state, isLoggedIn: false };
        }
        default: {
            return state;
        }
    }
};

export default LoginReducer;
