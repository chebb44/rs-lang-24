import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';
import { settingsState } from '../reducers/settingsReducer/settingsReducer';
export const rootReducer = combineReducers({
  appState,
  currentUser,
  settingsState,
});
