import { combineReducers } from 'redux';
import pageSelector from '../pageSelector/pageSelectorReducer';

export const rootReducer = combineReducers({
  pageSelector,
});
