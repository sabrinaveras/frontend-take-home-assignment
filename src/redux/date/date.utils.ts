import { DateTypes } from './date.types';

export const increaseDate = (date: DateTypes) => {
  const value = date.date;

  if (value.month === 11) {
    return { month: 0, year: value.year + 1, totalMonth: value.totalMonth + 1 };
  }

  return {
    month: value.month + 1,
    year: value.year,
    totalMonth: value.totalMonth + 1
  };
};

export const decreaseDate = (date: DateTypes) => {
  const value = date.date;

  if (
    !(
      new Date().getFullYear() === value.year &&
      new Date().getMonth() === value.month
    )
  ) {
    if (value.month === 0) {
      return {
        month: 11,
        year: value.year - 1,
        totalMonth: value.totalMonth - 1
      };
    }

    return {
      month: value.month - 1,
      year: value.year,
      totalMonth: value.totalMonth - 1
    };
  }

  return { month: value.month, year: value.year, totalMonth: value.totalMonth };
};
