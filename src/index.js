import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import reducers from './reducers';

//import registerServiceWorker from './registerServiceWorker';

function saveLocalStorage(state) {
try {

  const serializedState = JSON.stringify(state);
  localStorage.setItem('state',serializedState);
} catch(e) {
  console.log(e);
}
}
function loadLocalStorage(state) {
  try {
  
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch(e) {
      console.log(e);
      return undefined;
      }
  }
  const persistedState = loadLocalStorage();
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
  store.subscribe(() => saveLocalStorage(store.getState()))
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));