import * as React from 'react';

import { useDispatch } from 'react-redux';
import { addValue } from '../../redux/total-amount/total-amount.actions';

// components
import DateComponent from '../date/date.component';
import InputComponent from '../input/input.component';

// styles
import * as Styled from './card-inputs.styles';

const CardInputComponent: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const onUpdateValue = (value: string) => {
    dispatch(addValue(value));
  };

  return (
    <Styled.CardInputs>
      <Styled.TotalAmount>
        <InputComponent updateValue={onUpdateValue} />
      </Styled.TotalAmount>
      <Styled.ReachGoalBy>
        <label>Reach goal by</label>
        <DateComponent />
      </Styled.ReachGoalBy>
    </Styled.CardInputs>
  );
};

export default CardInputComponent;
