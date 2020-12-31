import styled from 'styled-components';

export const Card = styled.section`
  height: 471px;
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 30px 40px;
  margin: 24px auto 24px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 404px) {
    height: auto;
    margin-bottom: 63px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
