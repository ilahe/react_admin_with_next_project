import { HYDRATE } from "next-redux-wrapper";
import { PermissionTypes } from "../actionTypes";

const initialState = {
    permissionList: [],
    checkedAll: false,
};

const permissionReducer = function (state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.permissions };
        }
        case PermissionTypes.PUT_POST_PERMISSION: {
            return { ...state, permissionList: [], checkedAll: false };
        }
        case PermissionTypes.PUT_GET_PERMISSIONS: {
            let temp = action.payload;
            temp = temp.map((el) => ({ ...el, isChecked: false }));

            return { ...state, permissionList: temp };
        }
        case PermissionTypes.CHANGE_STATUS: {
            return {
                ...state,
                permissionList: state.permissionList.map((el) =>
                    parseInt(el.id) === parseInt(action.payload)
                        ? { ...el, isChecked: !el.isChecked }
                        : el
                ),
                checkedAll: false,
            };
        }
        case PermissionTypes.SELECT_ALL_STATUSES: {
            const checked = !state.checkedAll;
            console.log(checked);
            return {
                ...state,
                checkedAll: checked,
                permissionList: state.permissionList.map((el) => {
                    if (checked) {
                        return { ...el, isChecked: true };
                    }
                    return { ...el, isChecked: false };
                }),
            };
        }
        case PermissionTypes.CLEAR_PERMISSION_DATA: {
            return { ...state, permissionList: [], checkedAll: false };
        }
        default: {
            return state;
        }
    }
};

export default permissionReducer;
