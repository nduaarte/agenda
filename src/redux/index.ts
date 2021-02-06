import { createStore } from 'redux';
import { combineReducers } from 'redux';

import showDisplayReducer from './reducers/showDisplayReducer';
import currentAssignmentIdReducer from './reducers/currentAssignmentIdReducer';

const rootReducer = combineReducers({
  showDisplayReducer: showDisplayReducer,
  currentAssignmentIdReducer: currentAssignmentIdReducer
});

export const store = createStore(rootReducer);