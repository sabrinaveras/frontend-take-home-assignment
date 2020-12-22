import styled from 'styled-components';

export const Date = styled.div`
  width: 100%;
  height: 56px;

  background: #ffffff;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
`;

export const Arrow = styled.img`
  width: 10px;
  height: 18px;

  //margin: auto 15px;
  cursor: pointer;
  transform: ${props => props.orientation};
  margin: ${props => props.margin};
`;

export const MonthYear = styled.div`
  margin-top: 4px;

  h5 {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #1e2a32;
    margin: 0;
  }

  h6 {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #8a9ca9;
    margin: 0;
  }
`;
