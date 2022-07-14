import { all, call, put } from "redux-saga/effects";
import { getDataFromApi, postDataFromApi } from "../../api/api";
import urls from "../../constants/urls";
import { putCheckToken, putSignIn, putSignInError } from "./singInActions";
import Router from "next/router";
import { setSession } from "../../helpers";

export function* signIn(data) {
    try {
        // const token = yield call(postDataFromApi,`${urls.api}${urls.login}`,data.payload);
        const requests = yield all([
            call(postDataFromApi, `${urls.api}${urls.login}`, data.payload),
        ]);
        yield setSession(requests[0].data.access_token);
        yield Router.push("/statistician");
        yield put(putSignIn(requests[0].data));
    } catch (e) {
        yield put(putSignInError());
    }
}

export function* checkToken() {
    try {
        const check = yield call(
            getDataFromApi,
            `${urls.api}${urls.checkToken}`
        );
        yield put(putCheckToken(check));
    } catch (e) {
        console.log(e);
    }
}
