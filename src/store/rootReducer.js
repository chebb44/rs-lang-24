import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';

export const rootReducer = combineReducers({
  appState,
  currentUser,
});
