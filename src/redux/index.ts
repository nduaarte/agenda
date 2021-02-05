import { createStore } from 'redux';
import { combineReducers } from 'redux';

import ArrayAssignmentReducer from './reducers/ArrayAssignmentsReducer';

const rootReducer = combineReducers({
  ArrayAssignmentReducer: ArrayAssignmentReducer
});

export const store = createStore(rootReducer);