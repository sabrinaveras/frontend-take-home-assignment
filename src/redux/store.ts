import { createStore } from 'redux';

import { DateReducer } from './date/date.reducer';

export const store = createStore(DateReducer);
