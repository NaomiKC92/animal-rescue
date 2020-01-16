import { combineReducers } from 'redux';
import { hasErrored } from './hasErroredReducer';
import { isLoading } from './isLoadingReducer';
import { animals } from './AnimalsReducer'
import {donations} from './DonationReducer'

export const rootReducer = combineReducers({
  hasErrored,
  isLoading,
  animals,
  donations
});

export default rootReducer;

