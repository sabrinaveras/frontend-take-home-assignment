import * as React from 'react';

// images
const arrow = require('../../icons/arrow.svg') as string;

// styled
import * as Styled from './date.styles';

// interfaces
interface MonthlyAmount {
  totalAmount: number;
  totalMonths: number;
  month: number;
  year: number;
}

const DateComponent: React.FunctionComponent = () => {
  const monthsOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const [monthlyAmount, setMonthlyAmount] = React.useState<MonthlyAmount>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    totalAmount: 0,
    totalMonths: 0
  });

  const handleDate: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();

    if (event.target.id === 'arrow-right') {
      if (monthlyAmount.month === 11) {
        setMonthlyAmount({
          month: 0,
          year: monthlyAmount.year + 1,
          totalMonths: monthlyAmount.totalMonths,
          totalAmount: monthlyAmount.totalAmount
        });
      } else {
        setMonthlyAmount({
          month: monthlyAmount.month + 1,
          year: monthlyAmount.year,
          totalMonths: monthlyAmount.totalMonths,
          totalAmount: monthlyAmount.totalAmount
        });
      }
    } else {
      if (
        !(
          new Date().getFullYear() === monthlyAmount.year &&
          new Date().getMonth() == monthlyAmount.month
        )
      ) {
        if (monthlyAmount.month === 0) {
          setMonthlyAmount({
            month: 11,
            year: monthlyAmount.year - 1,
            totalMonths: monthlyAmount.totalMonths,
            totalAmount: monthlyAmount.totalAmount
          });
        } else {
          setMonthlyAmount({
            month: monthlyAmount.month - 1,
            year: monthlyAmount.year,
            totalMonths: monthlyAmount.totalMonths,
            totalAmount: monthlyAmount.totalAmount
          });
        }
      }
    }
  };

  return (
    <Styled.Date>
      <Styled.ArrowLeft src={arrow} id={'arrow-left'} onClick={handleDate} />
      <Styled.MonthYear>
        <h5>{monthsOfTheYear[monthlyAmount.month]}</h5>
        <h6>{monthlyAmount.year}</h6>
      </Styled.MonthYear>
      <Styled.ArrowRight src={arrow} id={'arrow-right'} onClick={handleDate} />
    </Styled.Date>
  );
};

export default DateComponent;
