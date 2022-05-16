import { combineReducers } from 'redux';

import { tabsReducer } from './tabsReducer/tabsReducer';
import { filtersReducer } from './filterReducer/filtersReducer';
import { ticketsReducer } from './ticketsReducer/ticketsReducer';

export const rootReducer = combineReducers({
  tabsReducer,
  filtersReducer,
  ticketsReducer,
});
