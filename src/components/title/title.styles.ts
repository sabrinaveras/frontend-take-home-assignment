import styled from 'styled-components';

export const Title = styled.section`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 48px auto 0;
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    text-align: center;

    color: #1b31a8;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    /*margin: 0 10px;*/
  }

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    h1,
    span {
      font-size: 18px;
    }
  }
`;
