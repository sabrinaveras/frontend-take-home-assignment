import { Actions, DateTypes } from './date.types';

import { increaseDate, decreaseDate } from './date.utils';

export interface DateState {
  state: DateState;
  date: DateTypes;
}

const INITIAL_STATE = {
  date: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    totalMonth: 0
  }
};

export const DateReducer = (
  state: DateTypes = INITIAL_STATE,
  action: Actions
) => {
  switch (action.type) {
    case 'INCREASE_DATE':
      return { ...state, date: increaseDate(state) };
    case 'DECREASE_DATE':
      return { ...state, date: decreaseDate(state) };
    default:
      return state;
  }
};
