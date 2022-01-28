import React from 'react';
import styled from 'styled-components';

import { IDicesProps } from '../../../interfaces';
import Dice from '../../ui/dice';

const DicesContainer = styled.div`
  margin-top: 80px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
`

function Dices({numberOfDices}: IDicesProps) {
  const Dices = [];

  for (let i = 0; i < numberOfDices; i ++) {
    Dices.push(
      <Dice key={i} number={Math.floor(Math.random() * (7 - 1) + 1)} />
    );
  }

  return (
    <DicesContainer>
      {
        Dices
        && Dices.length > 0
        && Dices.map(val => val)
      }
    </DicesContainer>
  );
}

export default Dices;
