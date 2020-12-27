import * as React from 'react';

// components
import DateComponent from '../date/date.component';
import InputComponent from '../input/input.component';

// styles
import * as Styled from './card-inputs.styles';

const CardInputComponent: React.FunctionComponent = () => {

  return (
    <Styled.CardInputs>
      <Styled.TotalAmount>
        <InputComponent />
      </Styled.TotalAmount>
      <Styled.ReachGoalBy>
        <label>Reach goal by</label>
        <DateComponent />
      </Styled.ReachGoalBy>
    </Styled.CardInputs>
  );
};

export default CardInputComponent;
