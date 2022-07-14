import { connect } from "react-redux";
import { getRolesList } from "src/redux/Roles/selectors";
import { setDeleteSingleRole } from "src/redux/Roles/actions";

import RolesList from "./RolesList";

const mapStateToProps = (state) => ({
    roleList: getRolesList(state),
});
const mapDispatchToProps = (dispatch) => ({
    roleDelete: (id) => dispatch(setDeleteSingleRole(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RolesList);
