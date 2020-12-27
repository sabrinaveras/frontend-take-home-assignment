/*
 * Total Amount type
 * */
export interface TotalAmountTypes {
  // totalAmount: {
  value: string;
  // };
}

/*
 * Total Amount const
 * */
export const GET_VALUE = 'GET_VALUE';

/*
 * Total Amount interface
 * */
interface GetValue {
  type: typeof GET_VALUE;
  payload: string;
}

export type Actions = GetValue;
