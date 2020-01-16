import { combineReducers } from 'redux';
import { hasErroredReducer } from './hasErroredReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { animals } from './AnimalsReducer'

export const rootReducer = combineReducers({
  hasErroredReducer,
  isLoadingReducer,
  animals
});

export default rootReducer;

