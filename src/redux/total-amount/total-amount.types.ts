export interface TotalAmountTypes {
  // totalAmount: {
  //   totalAmountValue: string;
  // };
  totalAmountValue: string;
}

export const UPDATE_TOTAL_AMOUNT = 'UPDATE_TOTAL_AMOUNT';

interface UpdateTotalAmount {
  type: typeof UPDATE_TOTAL_AMOUNT;
  payload: string;
}

export type Actions = UpdateTotalAmount;
