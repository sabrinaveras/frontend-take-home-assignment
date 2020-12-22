import * as React from 'react';

const arrow = require('../../icons/arrow.svg') as string;

// styled
import * as Styled from './date.styles';

const DateComponent: React.FunctionComponent = () => {
  return (
    <Styled.Date>
      <Styled.ArrowLeft src={arrow} />
      <Styled.MonthYear>
        <h5>October</h5>
        <h6>2020</h6>
      </Styled.MonthYear>
      <Styled.ArrowRight src={arrow} />
    </Styled.Date>
  );
};

export default DateComponent;
