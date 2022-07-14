import { put, call } from "redux-saga/effects";
import { getDataFromApi, postDataFromApi } from "../../api/api";
import {putGetPermission, putPostPermission} from "./actions";
import urls from "../../constants/urls";

export function* addPermission(data) {
    const permission = yield call(
        postDataFromApi,
       `${urls.api}${urls.createRole}`,
        data.payload.data
    );
    yield put(putPostPermission(permission));
}
export function* getPermissions() {
    const permissionList = yield call(getDataFromApi, `${urls.api}${urls.permissions}`);
    yield put(putGetPermission(permissionList.data));
}

