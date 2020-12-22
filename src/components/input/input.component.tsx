import * as React from 'react';

// styles
import * as Styled from './input.styles';

const InputComponent: React.FunctionComponent = () => {
  const handleInput: React.MouseEventHandler = event => {
    event.preventDefault();

    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{3})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');

    event.currentTarget.value = value;
  };

  return (
    <>
      <Styled.Label>Total amount</Styled.Label>
      <Styled.InputIconDollarSign onChange={handleInput} />
    </>
  );
};

export default InputComponent;
