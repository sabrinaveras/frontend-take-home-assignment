import { Actions, TotalAmountTypes } from './total-amount.types';

export interface TotalAmountState {
  state: TotalAmountState;
  totalAmount: TotalAmountTypes;
}

const initialState = {
  // totalAmount: {
  //   totalAmountValue: '150'
  // },
  totalAmountValue: '0'
};

export const TotalAmountReducer = (
  state: TotalAmountTypes = initialState,
  action: Actions
) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_AMOUNT':
      return { ...state, totalAmountValue: action.payload };
    default:
      return state;
  }
};
