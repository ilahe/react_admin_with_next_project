import { all, take, takeEvery } from "redux-saga/effects";
import { checkToken, signIn } from "./signIn/signInSaga";
import { addPermission, getPermissions } from "./Permissions/saga";
import {
  getRoles,
  setCreateRole,
  getSingleRole,
  setEditSingleRole,
  setDeleteSingleRole,
} from "./Roles/saga";
import {
  getUsersList,
  setCreateList,
  getSingleAdmin,
  setEditSingleAdmin,
  setToggleBlockSingleAdmin,
} from "./Users/saga";
import {
  blockCustomer,
  blockReasons,
  getAllCities,
  getCustomersList,
  getSingleCustomer,
  setCreateCustomersList,
  setEditSingleCustomer,
  unblockCustomer,
} from "./Customer/saga";
import { getCategoriesList } from "./Categories/saga";
import {
  LogInTypes,
  PermissionTypes,
  RolesTypes,
  UsersTypes,
  CustomersType,
  CategoriesType,
} from "./actionTypes";

function* rootSaga() {
  yield all([
    //LoginIn
    takeEvery(LogInTypes.POST_SIGN_IN, signIn),
    takeEvery(LogInTypes.POST_CHECK_TOKEN_ERROR, checkToken),
    //Premission
    takeEvery(PermissionTypes.POST_PERMISSION, addPermission),
    takeEvery(PermissionTypes.GET_PERMISSIONS, getPermissions),
    //Roles
    takeEvery(RolesTypes.GET_ALL_ROLES, getRoles),
    takeEvery(RolesTypes.SET_TO_API, setCreateRole),
    takeEvery(RolesTypes.GET_SINGLE_ROLE, getSingleRole),
    takeEvery(RolesTypes.SET_EDIT_SINGLE_ROLE, setEditSingleRole),
    takeEvery(RolesTypes.SET_DELETE_SINGLE_ROLE, setDeleteSingleRole),
    //Users
    takeEvery(UsersTypes.GET_USERS, getUsersList),
    takeEvery(UsersTypes.SET_POST_USER, setCreateList),
    takeEvery(UsersTypes.GET_SINGLE_ADMIN, getSingleAdmin),
    takeEvery(UsersTypes.SET_EDIT_SINGLE_ADMIN, setEditSingleAdmin),
    takeEvery(
      UsersTypes.SET_TOGGLE_BLOCK_SINGLE_ADMIN,
      setToggleBlockSingleAdmin
    ),
    //Customers
    takeEvery(CustomersType.GET_CUSTOMERS, getCustomersList),
    takeEvery(CustomersType.SET_POST_CUSTOMERS, setCreateCustomersList),
    takeEvery(CustomersType.GET_SINGLE_CUSTOMER, getSingleCustomer),
    takeEvery(CustomersType.SET_EDIT_SINGLE_CUSTOMER, setEditSingleCustomer),
    takeEvery(CustomersType.GET_ALL_CITIES, getAllCities),
    takeEvery(CustomersType.SET_BLOCK_SINGLE_CUSTOMER, blockCustomer),
    takeEvery(CustomersType.SET_UNBLOCK_SINGLE_CUSTOMER, unblockCustomer),
    takeEvery(CustomersType.GET_BLOCK_REASON, blockReasons),

    //Categories
    takeEvery(CategoriesType.GET_CATEGORIES, getCategoriesList),
  ]);
}
export default rootSaga;
