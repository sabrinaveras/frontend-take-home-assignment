import * as React from 'react';

// styles
import * as Styled from './button.styles';

// interfaces
interface ButtonProps {
  backgroundColor: string;
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  children
}) => <Styled.ButtonCardConfirm>{children}</Styled.ButtonCardConfirm>;

export default ButtonComponent;
