import * as React from 'react';

// utils
import { currency } from '../../utils/masks';

// styles
import * as Styled from './input.styles';

// interfaces
interface UpdateInputValue {
  updateValue(value: string): void;
}

const InputComponent: React.FunctionComponent<UpdateInputValue> = ({
  updateValue
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleUpdateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // const value = event.target.value;
    // value = value.replace(/\D/g, '');
    // value = value.replace(/(\d)(\d{3})$/, '$1,$2');
    // value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');
    // event.currentTarget.value = value;
    const valueMasked = currency(event.target.value);
    setInputValue(valueMasked);
    updateValue(valueMasked);
  };

  return (
    <>
      <Styled.Label>Total amount</Styled.Label>
      <Styled.InputIconDollarSign
        onChange={handleUpdateValue}
        value={inputValue}
      />
    </>
  );
};

export default InputComponent;
