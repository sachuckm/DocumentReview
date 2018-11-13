
  export const selectDocumentAction = (selectedDoc) => {
    return {
      type: 'ON_DOCUMENT_SELECTED',
      selectedDoc,
      isSelected:true
    };
  };
  