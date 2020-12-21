import * as React from 'react';

// style
import * as Styled from './title.styles';

const TitleComponent: React.FunctionComponent = () => {
  return (
    <Styled.Title>
      <h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's plan your <span>saving goal.</span>
      </h1>
    </Styled.Title>
  );
};

export default TitleComponent;
