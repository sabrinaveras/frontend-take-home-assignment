import { Action } from './total-amount.types';

export interface TotalAmountState {
  value: string;
}

const INITIAL_STATE = {
  value: ''
};

export const totalAmountReducer = (
  state: TotalAmountState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// import { Actions, TotalAmountTypes } from './total-amount.types';
//
// export interface TotalAmountState {
//   state: TotalAmountState;
//   value: string;
// }
//
// const INITIAL_STATE = {
//   value: '0'
// };
//
// export const TotalAmountReducer = (
//   state: TotalAmountTypes = INITIAL_STATE,
//   action: Actions
// ) => {
//   console.log('state.value', state);
//   console.log('state.value', state.value);
//
//   switch (action.type) {
//     case 'GET_VALUE':
//       return { ...state, value: state.value };
//     default:
//       return state;
//   }
// };
