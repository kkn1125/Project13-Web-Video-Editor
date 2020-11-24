import React from 'react';
import styled from 'styled-components';

import color from '@/theme/colors';
import style from './style';
import { ButtonType } from '.';

interface StyledProps {
  buttonType: ButtonType;
}

const StyledButton = styled.button<StyledProps>`
  padding: 5px 16px;
  border: none;
  border-radius: 5px;
  color: ${color.WHITE};
  white-space: nowrap;
  cursor: pointer;
  ${({ buttonType }) => style(buttonType)}

  &:focus {
    outline: none;
  }
`;

interface Props {
  children?: React.ReactChild;
  message: string;
  onClick?: () => void;
  type: ButtonType;
}

const Button: React.FC<Props> = ({ children, message, onClick, type }) => (
  <StyledButton buttonType={type} onClick={onClick}>
    {children}
    {children && <br />}
    {message}
  </StyledButton>
);

export default Button;