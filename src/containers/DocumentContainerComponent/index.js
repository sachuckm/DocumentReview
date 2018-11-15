import DocumentContainerComponent from "./DocumentContainerComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectDocumentAction, postMethod} from './../../actions/userAction';


const mapStateToProps = (state) => {
  return {
        selectedDoc: state.userReducer.selectedDoc,
        selectedFileId: state.userReducer.selectedFileId,
        text: state.userReducer.text
  };

};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectDocumentAction,
    postMethod
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainerComponent);
