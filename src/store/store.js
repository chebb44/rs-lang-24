import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const saga = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, saga))
);
