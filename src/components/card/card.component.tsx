import * as React from 'react';

// components
import ButtonComponent from '../button/button.component';

// styles
import * as Styled from './card.styles';

const CardComponent: React.FunctionComponent = () => {
  return (
    <Styled.Card>
      <ButtonComponent />
    </Styled.Card>
  );
};

export default CardComponent;
