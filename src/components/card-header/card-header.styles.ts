import styled from 'styled-components';

export const CardHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
`;

export const TitleSubtitle = styled.div`
  margin: auto 0 auto 16px;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0;
    text-align: left;
    margin: 0;
    color: #1e2a32;
  }

  h2 {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    margin: 0;
    color: #708797;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 14px;
    }
  }
`;
