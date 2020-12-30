import { Actions, UPDATE_TOTAL_AMOUNT } from './total-amount.types';

export const UpdateTotalAmount = (totalAmountValue: string): Actions => ({
  type: UPDATE_TOTAL_AMOUNT,
  payload: totalAmountValue
});
