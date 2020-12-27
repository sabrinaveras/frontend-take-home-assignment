import * as React from 'react';

import { useSelector } from 'react-redux';
import { DateState } from '../../redux/date/date.reducer';
import { DateTypes } from '../../redux/date/date.types';
import { TotalAmountState } from '../../redux/total-amount/total-amount.reducer';

// styles
import * as Styled from './monthly-amount-info.styles';

const MonthlyAmountInfoComponent: React.FunctionComponent = () => {
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
  const date = useSelector<DateState, DateTypes>(state => state.date);
  const value = useSelector<TotalAmountState, string>(state => state.value);

  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <h3>Monthly amount</h3>
        <h1>${value}</h1>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You're planning <span> {date.date.totalMonth} monthly deposits </span>to reach your{' '}
          <span> U$ 25,000 </span>goal by
          <span>
            {' '}
            {monthsOfTheYear[date.date.month]} {date.date.year}.
          </span>
        </p>
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
};

export default MonthlyAmountInfoComponent;
