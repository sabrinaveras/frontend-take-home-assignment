import * as React from 'react';

const arrow = require('../../icons/arrow.svg') as string;

// styled
import * as Styled from './date.styles';

const DateComponent: React.FunctionComponent = () => {
  return (
    <Styled.Date>
      <Styled.Arrow
        src={arrow}
        orientation={'rotate(0deg)'}
        margin={'auto auto auto 15px'}
      />
      <Styled.MonthYear>
        <h5>October</h5>
        <h6>2020</h6>
      </Styled.MonthYear>
      <Styled.Arrow
        src={arrow}
        orientation={'rotate(180deg)'}
        margin={' auto 15px auto auto'}
      />
    </Styled.Date>
  );
};

export default DateComponent;
