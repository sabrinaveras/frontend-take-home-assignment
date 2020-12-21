import * as React from 'react';

// styles
import * as Styled from './home.styles';

// components
import Header from '../../components/header/header.component';
import TitleComponent from '../../components/title/title.component';
import CardComponent from '../../components/card/card.component';

const HomePage: React.FunctionComponent = () => {
  return (
    <Styled.Container>
      <Header />
      <TitleComponent />
      <CardComponent />
    </Styled.Container>
  );
};

export default HomePage;
