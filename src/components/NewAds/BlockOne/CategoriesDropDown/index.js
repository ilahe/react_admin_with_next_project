import { connect } from "react-redux";
import { getCategoriesList } from "src/redux/Categories/selectors";
import CategoriesDropDown from "./CategoriesDropDown";

const mapStateToProps = (state) => ({
    categoriesList: getCategoriesList(state),
});

export default connect(mapStateToProps)(CategoriesDropDown);
