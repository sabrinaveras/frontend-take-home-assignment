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
  cursor: pointer;
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(0deg);
  margin: auto auto auto 15px;
`;

export const ArrowRight = styled(Arrow)`
  transform: rotate(180deg);
  margin: auto 15px auto auto;
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

  @media screen and (max-width: 480px) {
    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 14px;
    }
  }
`;
