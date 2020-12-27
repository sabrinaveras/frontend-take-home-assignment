import { combineReducers } from 'redux';

// reducers
import { DateReducer } from './date/date.reducer';
import { TotalAmountReducer } from './total-amount/total-amount.reducer';

const rootReducer = combineReducers({
  date: DateReducer,
  totalAmount: TotalAmountReducer
});

export default rootReducer;
