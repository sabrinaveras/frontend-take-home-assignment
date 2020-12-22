import * as React from 'react';

// images
const house = require('../../icons/house.svg') as string;

// styles
import * as Styled from './card-header.styles';

const CardHeaderComponent: React.FunctionComponent = () => {
  return (
    <Styled.CardHeader>
      <img src={house} alt={'house'} />
      <Styled.TitleSubtitle>
        <h1>Buy a house</h1>
        <h2>Saving goal</h2>
      </Styled.TitleSubtitle>
    </Styled.CardHeader>
  );
};

export default CardHeaderComponent;
