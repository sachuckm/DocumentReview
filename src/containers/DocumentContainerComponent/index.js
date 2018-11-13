import DocumentContainerComponent from "./DocumentContainerComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectDocumentAction} from './../../actions/userAction';


const mapStateToProps = (state) => {
  return {
        selectedDoc: state.userReducer.selectedDoc,
        selectedFileId: state.userReducer.selectedFileId
  };

};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectDocumentAction
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainerComponent);
