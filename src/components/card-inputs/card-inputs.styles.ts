import styled from 'styled-components';

export const CardInputs = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
`;

export const TotalAmount = styled.div`
  width: 56%;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
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
`;
