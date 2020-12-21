import * as React from 'react';

// styles
import * as Styled from './home.styles';

// components
import Header from '../components/header.component';

const HomePage: React.FunctionComponent = () => {
  return (
    <Styled.Container>
      <Header />
    </Styled.Container>
  );
};

export default HomePage;
