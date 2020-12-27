import { Actions, GET_VALUE } from './total-amount.types';

export const getValue = (value: string): Actions => ({
  type: GET_VALUE,
  payload: value
});
