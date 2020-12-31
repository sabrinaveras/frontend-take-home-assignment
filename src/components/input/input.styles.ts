import styled from 'styled-components';

// images
const dollar = require('../../icons/dollar-sign.svg') as string;

export const Input = styled.input`
  width: 100%;
  height: 56px;

  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;

  color: #4d6475;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;

  &:focus {
    box-shadow: none;
    outline: none;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InputIconDollarSign = styled(Input)`
  background: #ffffff url(${dollar}) no-repeat left;
  background-size: auto;
  background-position-x: 10px;
  text-indent: 40px;
`;

export const Label = styled.label`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #1e2a32;

  flex: none;
  order: 0;
  align-self: flex-start;
  flex-grow: 0;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
