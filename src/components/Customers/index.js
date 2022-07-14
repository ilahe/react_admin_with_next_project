import { connect } from "react-redux";
import {
  getCustomersList,
  setBlockReasons,
} from "src/redux/Customer/selectors";
import CustomersList from "./CustomersList";
import {
  setBlockCustomer,
  setUnBlockCustomer,
} from "../../redux/Customer/action";

const mapStateToProps = (state) => ({
  customersList: getCustomersList(state),
  blockReasonsList: setBlockReasons(state),
});
const mapDispatchToProps = (dispatch) => ({
  blockCustomer: (data) => dispatch(setBlockCustomer(data)),
  unblockCustomer: (data) => dispatch(setUnBlockCustomer(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
