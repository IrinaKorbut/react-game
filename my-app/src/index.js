import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/reduxStore'

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ state } dispatch={ store.dispatch.bind(store) } />
    </React.StrictMode>,
    document.getElementById('root')
  );  

  reportWebVitals();
}

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});


