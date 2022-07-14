import { createSelector } from "reselect";
import { tableCustomersCreate } from "src/helpers/tableRow";

export const getCustomersStateFromReducer = (state) => state.customers;

export const getCustomersList = createSelector(
  getCustomersStateFromReducer,
  (store) => store?.customers
);
export const getCustomersListForTable = createSelector(
  getCustomersStateFromReducer,
  (store) => tableCustomersCreate(store?.customers)
);
export const setCreateCustomers = createSelector(
  getCustomersStateFromReducer,
  (store) => store?.createCustomers
);
export const setAllCities = createSelector(
  getCustomersStateFromReducer,
  (store) => store?.cities
);
export const setBlockReasons = createSelector(
  getCustomersStateFromReducer,
  (store) => store?.block_reasons
);
export const getCustomersEmail = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.email
);
export const getCustomersFullName = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.full_name
);
export const getCustomersPhone = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.phone
);
export const getCustomersPassword = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.password
);
export const getCustomersPassConfirmation = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.password_confirmation
);
export const getCustomersNote = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.note
);
export const getCustomersAddPhone = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.contacts.phones
);
export const getCustomersWhatsApp = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.contacts.whatsapp
);
export const getCustomersAddress = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.address
);
export const getCustomersCity = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.city
);
export const getCustomersAvatar = createSelector(
  setCreateCustomers,
  (createCustomers) => createCustomers?.avatar
);
