import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';
import { learnCard } from '../reducers/learnCard/learnCardReducer';
import { learnCardSettings } from '../reducers/learnCardSettings/learnCardSettingsReducer';

export const rootReducer = combineReducers({
  appState,
  currentUser,
  learnCard,
  learnCardSettings,
});
