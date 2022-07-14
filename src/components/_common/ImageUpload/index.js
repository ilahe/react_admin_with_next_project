import ImageUpload from "./ImageUpload";
import { connect } from "react-redux";
import { getCustomersAvatar } from "../../../redux/Customer/selectors";
import { setImageToStore } from "../../../redux/Customer/action";

const mapStateToProps = (state) => ({
    getCustomersAvatar: getCustomersAvatar(state)
});
const mapDispatchToProps = (dispatch) => ({
    setImageToStore: image => dispatch(setImageToStore(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);

