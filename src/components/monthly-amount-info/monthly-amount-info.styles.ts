import styled from 'styled-components';

export const MonthlyAmountInfo = styled.div`
  width: 100%;
  height: 158px;
  display: flex;
  flex-wrap: wrap;

  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 8px;

  @media screen and (max-width: 404px) {
    margin-top: 24px;
  }
`;

export const MonthlyAmount = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 50%;
  width: 100%;

  h3 {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    color: #1e2a32;

    display: flex;
    align-items: center;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-left: 32px;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    /* or 38px */

    display: flex;
    align-items: center;
    color: #0079ff;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-right: 32px;
    margin-left: auto;
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 18px;
    }

    h1 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 404px) {
    display: grid;

    h3 {
      margin: 10px auto 0;
    }

    h1 {
      margin: 0 auto;
    }
  }
`;

export const Detail = styled.div`
  background-color: #f4f8fa;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #1e2a32;

    order: 0;
    align-self: auto;
    flex-grow: 0;
    margin: 0 32px;

    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 480px) {
  }

  @media screen and (max-width: 404px) {
    height: auto;
    padding: 10px;
  }
`;
