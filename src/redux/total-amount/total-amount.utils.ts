import { TotalAmountTypes } from './total-amount.types';

export const updateTotalAmountValue = (
  totalAmount: TotalAmountTypes,
  newTotalAmount: TotalAmountTypes
) => {
  return {
    totalAmountValue: newTotalAmount.totalAmountValue
  };
};
