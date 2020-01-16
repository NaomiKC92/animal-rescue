import { combineReducers } from 'redux';
import { hasErroredReducer } from './hasErroredReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { showAnimalsReducer } from './showAnimalsReducer'

const rootReducer = combineReducers({
  hasErroredReducer,
  isLoadingReducer,
  showAnimalsReducer
});

export default rootReducer;