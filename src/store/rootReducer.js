import { combineReducers } from 'redux';
import { appState } from '../reducers/appState/appStateReducer';
import { currentUser } from '../reducers/currentUser/currentUserReducer';
import { learnCards } from '../reducers/learnCards/learnCardsReducer';
import { learnCard } from '../reducers/learnCard/learnCardReducer';
import { learnCardButtons } from '../reducers/learnCardButtons/learnCardButtonsReducer';
import { learnSettings } from '../reducers/learnSettings/learnSettingsReducer';
import { statisticState } from '../reducers/statisticReducer/statiscticReducer';
import { dictionaryState } from '../reducers/dictionaryReducer/dictionaryReducer';
export const rootReducer = combineReducers({
  appState,
  currentUser,
  learnCards,
  learnSettings,
  statisticState,
  dictionaryState,
  learnCard,
  learnCardButtons,
});
