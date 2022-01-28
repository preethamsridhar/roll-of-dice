import React from 'react';
import styled from 'styled-components';

import { IInputProps } from '../../../interfaces';

const CustomInput = styled.input`
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid rgba(100, 46, 46, 0.521);
  border-radius: 5px;
  width: 400px;
`


function Input({placeholder, name, id}: IInputProps):React.ReactElement {
  return <CustomInput type="number" min={0} max={99} placeholder={placeholder} name={name} id={id} />;
}

export default Input
