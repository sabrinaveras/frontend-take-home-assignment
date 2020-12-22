import * as React from 'react';

// styles
import * as Styled from './button.styles';

// interfaces
interface ButtonProps {
  backgroundColor: string;
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  backgroundColor,
  children
}) => (
  <Styled.Button backgroundColor={backgroundColor}>{children}</Styled.Button>
);

export default ButtonComponent;
//
// const ButtonComponent: React.FunctionComponent = () => {
//   return <Styled.Button type="submit">Confirm</Styled.Button>;
// };
//
// export default ButtonComponent;
