/*
 * Date type
 * */
export interface DateTypes {
  date: {
    month: number;
    year: number;
    totalMonth: number;
  };
}

/*
 * Date type const
 * */
export const INCREASE_DATE = 'INCREASE_DATE';
export const DECREASE_DATE = 'DECREASE_DATE';

/*
 * Date type interface
 * */
interface IncreaseDate {
  type: typeof INCREASE_DATE;
  payload: DateTypes;
}

interface DecreaseDate {
  type: typeof DECREASE_DATE;
  payload: DateTypes;
}

export type Actions = IncreaseDate | DecreaseDate;
