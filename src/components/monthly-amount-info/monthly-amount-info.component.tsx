import * as React from 'react';

import { useSelector } from 'react-redux';
import { DateState } from '../../redux/date/date.reducer';
import { DateTypes } from '../../redux/date/date.types';
import { TotalAmountState } from '../../redux/total-amount/total-amount.reducer';
import { TotalAmountTypes } from '../../redux/total-amount/total-amount.types';

// utils
import { monthsOfTheYear } from '../../utils/monthsOfTheYear';

// styles
import * as Styled from './monthly-amount-info.styles';

const MonthlyAmountInfoComponent: React.FunctionComponent = () => {
  const date = useSelector<DateState, DateTypes>(state => state.date);
  const valueInput = useSelector<TotalAmountState, TotalAmountTypes>(
    state => state.totalAmount
  );

  const monthlyAmount = (
    Number(valueInput.totalAmountValue.replace(',', '')) / date.date.totalMonth
  ).toFixed(0);

  return (
    <Styled.MonthlyAmountInfo>
      <Styled.MonthlyAmount>
        <h3>Monthly amount</h3>
        <h1>${monthlyAmount}</h1>
      </Styled.MonthlyAmount>
      <Styled.Detail>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You're planning <span> {date.date.totalMonth} monthly deposits </span>
          to reach your <span> U$ {valueInput.totalAmountValue} </span>goal by
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
