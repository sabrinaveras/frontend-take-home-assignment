export interface DateTypes {
  month: number;
  year: number;
}

export const INCREASE_DATE = 'INCREASE_DATE';
export const DECREASE_DATE = 'DECREASE_DATE';

interface IncreaseDate {
  type: typeof INCREASE_DATE;
  payload: DateTypes;
}

interface DecreaseDate {
  type: typeof DECREASE_DATE;
  payload: DateTypes;
}

export type Actions = IncreaseDate | DecreaseDate;
