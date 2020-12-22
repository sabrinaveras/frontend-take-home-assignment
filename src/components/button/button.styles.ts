import styled from 'styled-components';

export const Button = styled.button`
  width: 320px;
  height: 56px;

  background-color: ${props => props.backgroundColor}; //#1b31a8;
  border-radius: 32px;
  border: none;

  left: calc(50% - 64px / 2);
  top: calc(50% - 20px / 2);

  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;
