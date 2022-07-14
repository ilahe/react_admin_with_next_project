import {CustomersType, RolesTypes, SET_LOADING} from "../actionTypes";

export const getCustomerList = () => ({
  type: CustomersType.GET_CUSTOMERS,
});

export const setCustomersDataByKey = (payload) => ({
  type: CustomersType.SET_CUSTOMERS_DATA_BY_KEY,
  payload,
});

export const putCustomersList = (customers) => ({
  type: CustomersType.PUT_CUSTOMERS,
  payload: customers,
});

export const setCustomersPost = () => ({
  type: CustomersType.SET_POST_CUSTOMERS,
});

export const getSingleCustomer = (payload) => ({
  type: CustomersType.GET_SINGLE_CUSTOMER,
  payload,
});

export const putSingleCustomer = (payload) => ({
  type: CustomersType.PUT_SINGLE_CUSTOMER,
  payload,
});

export const setImageToStore = (payload) => ({
  type: CustomersType.SET_IMAGE_TO_STORE,
  payload,
});

export const setEditSingleCustomerToApi = (id) => ({
  type: CustomersType.SET_EDIT_SINGLE_CUSTOMER,
  id,
});

export const setBlockCustomer = (payload) => ({
  type: CustomersType.SET_BLOCK_SINGLE_CUSTOMER,
  payload,
});

export const setUnBlockCustomer = (id) => ({
  type: CustomersType.SET_UNBLOCK_SINGLE_CUSTOMER,
  id,
});

export const getBlockReason = () => ({ type: CustomersType.GET_BLOCK_REASON });
export const putBlockReason = (reasons) => ({
  type: CustomersType.PUT_BLOCK_REASON,
  reasons,
});

export const getAllCities = () => ({ type: CustomersType.GET_ALL_CITIES });
export const putAllCities = (payload) => ({
  type: CustomersType.PUT_ALL_CITIES,
  payload,
});


