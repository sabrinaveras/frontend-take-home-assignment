import { Actions, DateTypes, DECREASE_DATE } from './date.types';

export const increaseDate = (date: DateTypes): Actions => ({
  type: 'INCREASE_DATE',
  payload: date
});

export const decreaseDate = (date: DateTypes): Actions => ({
  type: DECREASE_DATE,
  payload: date
});
