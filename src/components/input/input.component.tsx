import * as React from 'react';

// styles
import * as Styled from './input.styles';

const InputComponent: React.FunctionComponent = () => {
  return (
    <>
      <Styled.Label>Total amount</Styled.Label>
      <Styled.Input />
    </>
  );
};

export default InputComponent;
