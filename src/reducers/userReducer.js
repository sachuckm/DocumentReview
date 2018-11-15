export const userReducer = (state = {}, action) => {
    switch (action.type) {
  
    case "ON_DOCUMENT_SELECTED":
    
      return {
        ...state,
        selectedDoc: action.selectedDoc,
      };
      case "FETCH_POST_SUCCESS":
      return {
        text: action.text
      }
    default:
      return state;
    }
  
  };
  
  export default userReducer;
  