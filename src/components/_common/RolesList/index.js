import { connect } from "react-redux";
import { getRolesList } from "src/redux/Roles/selectors";
import { getAllRoles } from "src/redux/Roles/actions";
import RolesList from "./RolesList";
import { getUserRolesList } from "src/redux/Users/selectors";

const mapStateToProps = (state) => ({
    rolesList: getRolesList(state),
    selectedRoles: getUserRolesList(state),
});

export default connect(mapStateToProps, null)(RolesList);
