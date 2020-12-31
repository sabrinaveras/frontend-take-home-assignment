import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #f4f8fa;

  @media screen and (max-height: 774px) {
    height: auto;
  }

  @media screen and (max-width: 410px) {
    height: auto;
  }
`;
