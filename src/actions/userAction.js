
  export const selectDocumentAction = (selectedDoc) => {
    return {
      type: 'ON_DOCUMENT_SELECTED',
      selectedDoc,
      isSelected:true
    };
  };
  export const fetchPostError = () => {
    return {
      type: 'FETCH_POST_ERROR'
    };
  };
export const fetchPostSuccess = (text) => {
    return {
    type: 'FETCH_POST_SUCCESS',
    text:text,
    };
  };
  export const postMethod = (link, successCB, failureCB) => {
    //  return dispatch => {
        let itemURI =  'http://localhost:3002/documents';
        const request = new Request(itemURI , {
            method:'POST',
            bodyUsed:true,
            body: JSON.stringify(link),
            //credentials: 'same-origin',
            mode: 'no-cors',
            headers: new Headers({
            "Content-Type": "application/json"
          }) 
        });
        console.log('dispath');
        return fetch(request).then((data) => data.json()).then(res => {
          console.log('success' + JSON.stringify(res)); 
          /*if(res.status === 200) {
            
      successCB ? successCB(): '';
    } else {
      failureCB ? failureCB(): '';
    }
      //dispatch(fetchPostSuccess(res));*/
    }).catch(err => {
    console.log('error');
    failureCB ? failureCB(err): '';
      //dispatch(fetchPostError(err));
    });
  //};
}