import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';
import { settingsState } from '../reducers/settingsReducer/settingsReducer';
import { statisticState } from '../reducers/statisticReducer/statiscticReducer';
export const rootReducer = combineReducers({
  appState,
  currentUser,
  settingsState,
  statisticState,
});
