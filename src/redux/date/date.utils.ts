import { DateTypes } from './date.types';

export const increaseDate = (date: DateTypes) => {
  if (date.month === 11) {
    return { month: 1, year: date.year + 1 };
  }

  return { month: date.month + 1, year: date.year };
};

export const decreaseDate = (date: DateTypes) => {
  if (
    !(
      new Date().getFullYear() === date.year &&
      new Date().getMonth() === date.month
    )
  ) {
    if (date.month === 0) {
      return { month: 11, year: date.year - 1 };
    }

    return { month: date.month - 1, year: date.year };
  }

  return { month: date.month, year: date.year };
};
