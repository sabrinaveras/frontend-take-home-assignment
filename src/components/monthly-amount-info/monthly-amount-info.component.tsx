import * as React from 'react';

// styles
import * as Styled from './monthly-amount-info.styles';

const MonthlyAmountInfoComponent: React.FunctionComponent = () => {
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
          <span> U$ 25,000 </span>goal by<span>October 2022</span>
        </p>
      </Styled.Detail>
    </Styled.MonthlyAmountInfo>
  );
};

export default MonthlyAmountInfoComponent;
