import * as React from 'react';

// styles
import * as Styled from './input.styles';

// interfaces
interface UpdateInputValue {
  updateValue(value: string): void;
}

const InputComponent: React.FunctionComponent<UpdateInputValue> = ({ updateValue }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleUpdateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{3})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');

    event.currentTarget.value = value;

    setInputValue(value);
    updateValue(value);
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
