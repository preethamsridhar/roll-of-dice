import React from 'react';
import styled from 'styled-components';

import { IButtonProps } from '../../../interfaces';

const StyledButton = styled.button`
  font-size: 22px;
  padding: 12px 24px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: rgba(22, 161, 34, 0.5);
  cursor: pointer;

  &:hover {
    background-color: rgba(24, 129, 209, 0.5);
  }
`

function Button({type, name}: IButtonProps) {
  return <StyledButton type={type}>{name}</StyledButton>;
}

export default Button;
