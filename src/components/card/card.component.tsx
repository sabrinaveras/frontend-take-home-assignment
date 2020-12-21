import * as React from 'react';

// components
import CardInputComponent from '../card-inputs/card-inputs.component';
import MonthlyAmountInfoComponent from '../monthly-amount-info/monthly-amount-info.component';
import ButtonComponent from '../button/button.component';

// styles
import * as Styled from './card.styles';

const CardComponent: React.FunctionComponent = () => {
  return (
    <Styled.Card>
      <CardInputComponent />
      <MonthlyAmountInfoComponent />
      <ButtonComponent />
    </Styled.Card>
  );
};

export default CardComponent;
