import * as React from 'react';

// styled
import * as Styled from './date.styles';

const DateComponent: React.FunctionComponent = () => {
  return (
    <Styled.Date>
      <Styled.Arrow />
      <Styled.MonthYear>
        <h5>October</h5>
        <h6>2020</h6>
      </Styled.MonthYear>
      <Styled.Arrow />
    </Styled.Date>
  );
};

export default DateComponent;
