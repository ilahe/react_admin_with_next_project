import { connect } from "react-redux";
import { setAllCities } from "src/redux/Customer/selectors";
import BlockOne from "./BlockOne";

const mapStateToProps = (state) => ({
    cityList: setAllCities(state),
});

export default connect(mapStateToProps)(BlockOne);
