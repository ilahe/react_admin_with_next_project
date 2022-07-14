import { connect } from "react-redux";
import AdministrationList from "./AdministrationList";
import { getUsersList } from "src/redux/Users/selectors";
import {
    setUsersList,
    setIsToggleBlockSingleAdmin,
} from "src/redux/Users/action";

const mapStateToProps = (state) => ({
    usersList: getUsersList(state),
});
const mapDispatchToProps = (dispatch) => ({
    takeUsers: () => dispatch(setUsersList()),
    isToogleBlock: (data) => dispatch(setIsToggleBlockSingleAdmin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdministrationList);
