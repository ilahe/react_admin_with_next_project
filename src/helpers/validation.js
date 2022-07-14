import _ from "lodash";


export const emailValidation =(email) =>{
    if(email.trim().length===0) return true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const phoneValidation = (phone) =>{
    return !(phone.trim().length < 12 && phone.trim().length !== 0)
}

export const passwordValidation = (password) =>{
    return !(password.trim().length < 6 && password.trim().length !== 0);
}

export const passwordConfirmationValidation = (password,passwordToConfirm) =>{
    return password.trim() === passwordToConfirm.trim();
}

export const checkErrors = (errorsList) =>{
    return _.every(errorsList, _.isEmpty);
}

export const validateUsers = (value,id,password)=>{
    if (id === "email")  return {[id]:!emailValidation(value)}
    if (id === "password")  return {[id]:!passwordValidation(value)}
    if (id === "phone")  return {[id]:!phoneValidation(value)}
    if (id === "password_confirmation")  return {[id]:!passwordConfirmationValidation(value,password)}
    if (id === "phones")  return {[id]:!phoneValidation(value)}
    if (id === "whatsapp")  return {[id]:!phoneValidation(value)}
    return {[id]:value}
}
