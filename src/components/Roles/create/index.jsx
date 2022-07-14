import { connect } from "react-redux";
import CreateRoles from "./CreateRoles";
import { getPermissionsList } from "src/redux/Permissions/selectors";
import {
    clearRolesPermissions,
    setRolesData,
    setRolesToApi,
    setEditSingleRoleToApi,
} from "src/redux/Roles/actions";
import {
    getColor,
    getDisplayNameAz,
    getDisplayNameRu,
    getName,
    getRolesPermissionsList,
} from "src/redux/Roles/selectors";

const mapStateToProps = (state) => ({
    permissionsList: getPermissionsList(state),
    checkedAll: state.permissions.checkedAll,
    displayNameAz: getDisplayNameAz(state),
    displayNameRu: getDisplayNameRu(state),
    name: getName(state),
    color: getColor(state),
    rolesPremissionsList: getRolesPermissionsList(state),
});
const mapDispatchToProps = (dispatch) => ({
    setRolesData: (data) => dispatch(setRolesData(data)),
    clearPermissions: () => dispatch(clearRolesPermissions()),
    rolePost: () => dispatch(setRolesToApi()),
    rolePut: (data) => dispatch(setEditSingleRoleToApi(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoles);
