import { connect } from "react-redux";
import { getPermissionsList } from "src/redux/Permissions/selectors";
import {
    changeStatus,
    clearPermissionData,
    getPermission,
    selectAllStatuses,
} from "src/redux/Permissions/actions";
import PermissionList from "./PermissionList";
import { clearRolesPermissions } from "src/redux/Roles/actions";

const mapStateToProps = (state) => ({
    permissionsList: getPermissionsList(state),
    checkedAll: state.permissions.checkedAll,
});
const mapDispatchToProps = (dispatch) => ({
    changeStatus: (id) => dispatch(changeStatus(id)),
    selectAllStatuses: () => dispatch(selectAllStatuses()),
    clearPermissionData: () => dispatch(clearPermissionData()),
    clearRolesPermissions: () => dispatch(clearRolesPermissions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PermissionList);
