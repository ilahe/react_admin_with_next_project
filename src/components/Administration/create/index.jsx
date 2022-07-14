import { connect } from "react-redux";
import {
    setUsersDataByKey,
    setUserPost,
    setEditSingleAdminToApi,
} from "src/redux/Users/action";
import CreateUsers from "./CreateUsers";
import {
    getUserEmail,
    getUserFullName,
    getUserPassConfirmation,
    getUserPassword,
    getUserPhone,
    getUserUsername,
    getUserRolesList,
    getPermissionsList,
} from "src/redux/Users/selectors";

const mapStateToProps = (state) => ({
    getUserEmail: getUserEmail(state),
    getUserFullName: getUserFullName(state),
    getUserUsername: getUserUsername(state),
    getUserPhone: getUserPhone(state),
    getUserPassword: getUserPassword(state),
    getUserPassConfirmation: getUserPassConfirmation(state),
    getUserRolesList: getUserRolesList(state),
    adminsPremissionsList: getPermissionsList(state),
});
const mapDispatchToProps = (dispatch) => ({
    onChangeUsersData: (payload) => dispatch(setUsersDataByKey(payload)),
    userPost: () => dispatch(setUserPost()),
    userPut: (id) => dispatch(setEditSingleAdminToApi(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateUsers);
