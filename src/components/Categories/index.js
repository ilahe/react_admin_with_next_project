import { connect } from "react-redux";
import { getCategoriesList } from "src/redux/Categories/selectors";
import CategoriesList from "./CalegoriesTree";

const mapStateToProps = (state) => ({
    categoriesList: getCategoriesList(state),
});

export default connect(mapStateToProps)(CategoriesList);
