import * as React from 'react';

import { useDispatch } from 'react-redux';
import { getValue } from '../../redux/total-amount/total-amount.actions';

// styles
import * as Styled from './input.styles';

// interfaces

const InputComponent: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [totalAmountValue, setTotalAmountValue] = React.useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{3})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');

    event.currentTarget.value = value;
    setTotalAmountValue(value);
    dispatch(getValue(value));
  };

  return (
    <>
      <Styled.Label>Total amount</Styled.Label>
      <Styled.InputIconDollarSign onChange={handleInput} />
    </>
  );
};

export default InputComponent;
