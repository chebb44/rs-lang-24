import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';
import { learnCard } from '../reducers/learnCard/learnCardReducer';
import { learnSettings } from '../reducers/learnSettings/learnSettingsReducer';
import { statisticState } from '../reducers/statisticReducer/statiscticReducer';

export const rootReducer = combineReducers({
  appState,
  currentUser,
  learnCard,
  learnSettings,
  statisticState,
});
