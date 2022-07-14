import CreateCustomers from "./CreateCustomers";
import { connect } from "react-redux";
import {
    getCustomersAddPhone,
    getCustomersAddress, getCustomersCity,
    getCustomersEmail,
    getCustomersFullName,
    getCustomersNote,
    getCustomersPassConfirmation,
    getCustomersPassword,
    getCustomersPhone,
    getCustomersWhatsApp, setAllCities
} from "../../../redux/Customer/selectors";
import {setCustomersDataByKey, setCustomersPost, setEditSingleCustomerToApi} from "../../../redux/Customer/action";
import {setEditSingleCustomer} from "../../../redux/Customer/saga";

const mapStateToProps = (state) => ({
    getCustomersEmail:getCustomersEmail(state),
    getCustomersFullName:getCustomersFullName(state),
    getCustomersPhone:getCustomersPhone(state),
    getCustomersPassword:getCustomersPassword(state),
    getCustomersPassConfirmation:getCustomersPassConfirmation(state),
    getCustomersNote:getCustomersNote(state),
    getCustomersAddPhone:getCustomersAddPhone(state),
    getCustomersWhatsApp:getCustomersWhatsApp(state),
    getCustomersAddress:getCustomersAddress(state),
    getCities: setAllCities(state),
    getCustomerCity: getCustomersCity(state)
});
const mapDispatchToProps = (dispatch) => ({
    setCustomersDataByKey: data => dispatch(setCustomersDataByKey(data)),
    setCustomersPost: () => dispatch(setCustomersPost()),
    setCustomersPut: data => dispatch(setEditSingleCustomerToApi(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomers);

