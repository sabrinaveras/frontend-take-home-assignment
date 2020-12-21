import * as React from 'react';

// components
import MonthlyAmountInfoComponent from '../monthly-amount-info/monthly-amount-info.component';
import ButtonComponent from '../button/button.component';

// styles
import * as Styled from './card.styles';

const CardComponent: React.FunctionComponent = () => {
  return (
    <Styled.Card>
      <MonthlyAmountInfoComponent />
      <ButtonComponent />
    </Styled.Card>
  );
};

export default CardComponent;
