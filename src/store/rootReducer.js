import { combineReducers } from 'redux';
import appState from '../app/appStateReducer';

export const rootReducer = combineReducers({
  appState,
});
