import { combineReducers } from 'redux';
import { hasErroredReducer } from './hasErroredReducer';
import { isLoadingReducer } from './isLoadingReducer'

const rootReducer = combineReducers({
  hasErroredReducer,
  isLoadingReducer
});

export default rootReducer;