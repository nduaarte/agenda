import { createStore } from 'redux';
import { combineReducers } from 'redux';

import showDisplayReducer from './reducers/showDisplayReducer';

const rootReducer = combineReducers({
  showDisplayReducer: showDisplayReducer
});

export const store = createStore(rootReducer);