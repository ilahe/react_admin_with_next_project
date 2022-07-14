import { put, call, select } from "redux-saga/effects";
import Router from "next/router";
import {
    getDataFromApi,
    postDataFromApi,
    putDataToApi,
    deleteDataFromApi,
} from "src/api/api";
import urls from "src/constants/urls";
import { roles } from "src/constants/path";
import { putAllRoles, putSingleRole } from "./actions";
import { setCreateRoles } from "./selectors";

export function* getRoles() {
    const rolesList = yield call(getDataFromApi, `${urls.api}${urls.roles}`);
    yield put(putAllRoles(rolesList.data));
}
export function* setDeleteSingleRole(data) {
    try {
        const req = yield call(
            deleteDataFromApi,
            `${urls.api}${urls.role}/${data.id}${urls.delete}`
        );
        Router.push(roles);
    } catch (err) {
        console.log(err);
    }
}
export function* setCreateRole() {
    const data = yield select(setCreateRoles);
    try {
        const req = yield call(
            postDataFromApi,
            `${urls.api}${urls.role}${urls.create}`,
            data
        );
        Router.push(roles);
    } catch (err) {
        console.log(err);
    }
}

export function* setEditSingleRole(data) {
    const roleData = yield select(setCreateRoles);
    try {
        const req = yield call(
            putDataToApi,
            `${urls.api}${urls.role}/${data.id}${urls.edit}`,
            roleData
        );
        Router.push(roles);
    } catch (err) {
        console.log(err);
    }
}

export function* getSingleRole(data) {
    const id = data?.payload;
    try {
        const response = yield call(
            getDataFromApi,
            `${urls.api}${urls.role}/${id}${urls.edit}`
        );
        const data = response?.data;
        const role = {
            display_name: {
                az: data.display_name.az,
                ru: data.display_name.ru,
            },
            name: data.name,
            color: data.color,
            permissions: data.permissions,
        };
        yield put(putSingleRole(role));
    } catch (err) {
        console.log(err);
    }
}
