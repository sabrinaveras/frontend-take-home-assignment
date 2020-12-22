import * as React from 'react';

// styles
import * as Styled from './card-header.styles'

const CardHeaderComponent: React.FunctionComponent = () => {
  return (
    <Styled.CardHeader>
      <Styled.TitleSubtitle>
        <h1>Buy a house</h1>
        <h2>Saving goal</h2>
      </Styled.TitleSubtitle>
    </Styled.CardHeader>
  );
};

export default CardHeaderComponent;
