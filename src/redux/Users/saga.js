import { put, call, select } from "redux-saga/effects";
import Router from "next/router";
import { getDataFromApi, postDataFromApi, putDataToApi } from "src/api/api";
import { putUsersList, putSingleAdmin } from "./action";
import { setCreateUser } from "./selectors";
import urls from "src/constants/urls";
import { administration } from "src/constants/path";

export function* getUsersList() {
    const data = yield call(getDataFromApi, `${urls.api}${urls.users}`);
    yield put(putUsersList(data.data));
}
export function* setCreateList() {
    const data = yield select(setCreateUser);
    try {
        const req = yield call(
            postDataFromApi,
            `${urls.api}${urls.user}${urls.create}`,
            data
        );
        Router.push(administration);
    } catch (err) {
        console.log(err);
    }
}
export function* getSingleAdmin(data) {
    const id = data?.id;
    try {
        const response = yield call(
            getDataFromApi,
            `${urls.api}${urls.user}/${id}${urls.edit}`
        );
        const data = response?.data;
        const createUser = {
            full_name: data.full_name,
            email: data.email,
            username: data.username,
            phone: data.phone,
            roles: data.roles,
            password: "",
            password_confirmation: "",
            permissions: data.permissions,
        };
        yield put(putSingleAdmin(createUser));
    } catch (err) {
        console.log(err);
    }
}

export function* setEditSingleAdmin(data) {
    const adminData = yield select(setCreateUser);
    try {
        const req = yield call(
            putDataToApi,
            `${urls.api}${urls.user}/${data.id}${urls.edit}`,
            adminData
        );
        Router.push(administration);
    } catch (err) {
        console.log(err);
    }
}
export function* setToggleBlockSingleAdmin(data) {
    console.log(data);
    try {
        const req = yield call(
            postDataFromApi,
            `${urls.api}${urls.user}/${data.id}${urls.toggleBlock}`
        );
        Router.push(administration);
    } catch (err) {
        console.log(err);
    }
}
