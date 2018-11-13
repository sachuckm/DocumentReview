import ChatComponent from "./ChatComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectContactAction, statusButton} from '../../actions/userAction';


const mapStateToProps = (state) => {
  return {
  };

};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectContactAction,
    statusButton
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
