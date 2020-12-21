import * as React from 'react';

// styles
import * as Styled from './header.styles';

// images
const logo = require('../../icons/logo.svg') as string;

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <Styled.Header>
      <Styled.NavBar>
        <img src={logo} alt="logo" />
      </Styled.NavBar>
    </Styled.Header>
  );
};

export default HeaderComponent;
