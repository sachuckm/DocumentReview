export const userReducer = (state = {}, action) => {
    switch (action.type) {
  
    case "ON_DOCUMENT_SELECTED":
    
      return {
        ...state,
        selectedDoc: action.selectedDoc,
      };
    default:
      return state;
    }
  
  };
  
  export default userReducer;
  