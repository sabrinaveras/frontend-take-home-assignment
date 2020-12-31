import styled from 'styled-components';

export const CardInputs = styled.div`
  width: 100%;
  height: 81px;
  display: flex;

  @media screen and (max-width: 404px) {
    display: grid;
    height: auto;
  }
`;

export const TotalAmount = styled.div`
  width: 56%;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;

  @media screen and (max-width: 404px) {
    width: 100%;
    margin: 0;
  }
`;

export const ReachGoalBy = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;

  label {
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
  }

  @media screen and (max-width: 480px) {
    label {
      font-size: 12px;
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 404px) {
    width: 100%;
    margin: 0;
  }
`;
