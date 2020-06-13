import { combineReducers } from 'redux';
import { testReducer } from './../reducers/testReducer';

export const rootReducer = combineReducers({
  testReducer,
});
