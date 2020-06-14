import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store, saga } from './store/store';
import { sagaWatcher } from './store/sagaWatcher';
import { LoginRouter } from './App/LoginRouter';

const render = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <LoginRouter />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

saga.run(sagaWatcher);

render();

store.subscribe(render);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
