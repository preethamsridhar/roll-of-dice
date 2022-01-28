import React from 'react';
import styled from 'styled-components';
import { IDotProps } from '../../../../interfaces';

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: black;
`

function Dot({show}: IDotProps) {
  return (
    <DotContainer>
      { show && <SDot /> }
    </DotContainer>
  );
}

export default Dot;
