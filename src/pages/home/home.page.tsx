import * as React from 'react';

// styles
import * as Styled from './home.styles';

// components
import Header from '../../components/header/header.component';
import CardComponent from '../../components/card/card.component';

const HomePage: React.FunctionComponent = () => {
  return (
    <Styled.Container>
      <Header />
      <CardComponent />
    </Styled.Container>
  );
};

export default HomePage;
