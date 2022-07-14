import {LogInTypes} from "../actionTypes";


export const postSignIn = payload => ({type:LogInTypes.POST_SIGN_IN,payload});

export const putSignIn = payload => ({type:LogInTypes.PUT_SIGN_IN,payload});

export const putSignInError = () =>({type:LogInTypes.PUT_SIGN_IN_ERROR})

export const postCheckToken = () => ({type:LogInTypes.POST_CHECK_TOKEN_ERROR});

export const putCheckToken = (payload) => ({type:LogInTypes.PUT_CHECK_TOKEN_ERROR,payload});
