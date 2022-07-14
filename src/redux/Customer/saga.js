import { put, call, select } from "redux-saga/effects";
import { getDataFromApi, postDataFromApi, putDataToApi } from "src/api/api";
import {
  putAllCities,
  putBlockReason,
  putCustomersList,
  putSingleCustomer,
} from "./action";
import { setCreateCustomers } from "./selectors";
import urls from "src/constants/urls";

import Router from "next/router";
import { customers, roles } from "../../constants/path";
import { getBase64, getBase64FromUrl, isUrl } from "../../helpers/imageUpload";

export function* getCustomersList() {
  const data = yield call(getDataFromApi, `${urls.api}${urls.customers}`);
  yield put(putCustomersList(data.data));
}
export function* setCreateCustomersList() {
  const data = yield select(setCreateCustomers);
  console.log(data);
  try {
    yield call(
      postDataFromApi,
      `${urls.api}${urls.customer}${urls.create}`,
      data
    );
  } catch (err) {
    console.log(err);
  }
}
export function* getSingleCustomer(data) {
  const id = data?.payload;
  try {
    const response = yield call(
      getDataFromApi,
      `${urls.api}${urls.customer}/${id}${urls.edit}`
    );
    const data = response?.data;
    const customer = {
      contacts: {
        phones: data.contacts ? data.contacts.phones : "",
        whatsapp: data.contacts ? data.contacts.whatsapp : "",
      },
      full_name: data.full_name,
      phone: data.phone,
      email: data.email,
      city: data.city ? data.city.id : 1,
      note: data.note ? data.note : "",
      address: data.address ? data.address : "",
      avatar: data.avatar,
      email_notify_info: {
        sms: 0,
        mailing: 1,
        comments: 1,
      },
      sms_notify_info: {
        sms: 0,
        comments: 1,
      },
    };
    yield put(putSingleCustomer(customer));
  } catch (err) {
    console.log(err);
  }
}

export function* setEditSingleCustomer(data) {
  const customersData = yield select(setCreateCustomers);
  const avatarToBase64 = yield isUrl(customersData.avatar)
    ? getBase64FromUrl(customersData.avatar).then((result) => result)
    : customersData.avatar;
  try {
    yield call(
      putDataToApi,
      `${urls.api}${urls.customer}/${data.id}${urls.edit}`,
      { ...customersData, avatar: avatarToBase64 }
    );
    Router.push(customers);
  } catch (err) {
    console.log(avatarToBase64);
    console.log(customersData);
  }
}

export function* getAllCities() {
  try {
    const res = yield call(getDataFromApi, `${urls.api}${urls.cities}`);
    yield put(putAllCities(res.data));
  } catch (e) {
    console.log(e);
  }
}

export function* blockCustomer(data) {
  const id = data.payload.id;
  try {
    console.log(data);
    const res = yield call(
      postDataFromApi,
      `${urls.api}${urls.customer}/${id}${urls.block}`,
      data.payload.reasonData
    );
    yield call(getCustomersList);
  } catch (e) {}
}
export function* unblockCustomer(data) {
  const id = data.id;
  try {
    const res = yield call(
      postDataFromApi,
      `${urls.api}${urls.customer}/${id}${urls.unblock}`
    );
    yield call(getCustomersList);
  } catch (e) {
    console.log(e);
  }
}

export function* blockReasons() {
  try {
    const res = yield call(
      getDataFromApi,
      `${urls.api}${urls.customer}${urls.block_reasons}`
    );
    yield put(putBlockReason(res.data));
  } catch (e) {
    console.log(e);
  }
}
