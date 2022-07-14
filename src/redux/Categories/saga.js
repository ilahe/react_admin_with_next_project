import { put, call, select } from "redux-saga/effects";
import { getDataFromApi, postDataFromApi } from "src/api/api";
import urls from "src/constants/urls";
import {putAllCategories} from "./actions";


export function* getCategoriesList() {
    const data = yield call(getDataFromApi, `${urls.api}${urls.ads}${urls.categories}`);
    yield put(putAllCategories(data.data));
}
