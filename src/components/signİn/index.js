import { connect } from "react-redux";
import SignIn from "./Signİn";
import {postSignIn} from "../../redux/signIn/singInActions";



const mapDispatchToProps = (dispatch) => ({
    postSignIn: data => dispatch(postSignIn(data))
});

const mapStateToProps = state =>({
    logInError: state.signIn.error
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
