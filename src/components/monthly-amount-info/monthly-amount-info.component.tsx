import * as React from 'react';

import { useSelector } from 'react-redux';
import { DateState } from '../../redux/date/date.reducer';
import { DateTypes } from '../../redux/date/date.types';

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

  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <h3>Monthly amount</h3>
        <h1>$521</h1>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You're planning <span> 48 monthly deposits </span>to reach your{' '}
          <span> U$ 25,000 </span>goal by
          <span>
            {' '}
            {monthsOfTheYear[date.month]} {date.year}.
          </span>
        </p>
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
};

export default MonthlyAmountInfoComponent;
