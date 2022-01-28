import React from 'react';
import styled from 'styled-components';

import { IDiceProps } from '../../../interfaces';
import { dicePos } from '../../../utils/diceDot';
import Dot from './dot';

const SDice = styled.div`
  padding: 10px;
  border: 4px solid rgba(37, 79, 161, 0.8);
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  border-radius: 15px;
  margin: 10px;
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  animation-duration: ${Math.random() * 4}s;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
  animation-name: rolldice;

  @keyframes rolldice {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

function Dice({number}: IDiceProps) {
  const diceArray = [];

  for (let i = 0; i < 9; i++) {
    if (dicePos[i].includes(number)) {
      diceArray.push(true);
    } else {
      diceArray.push(false);
    }
  }

  return (
    <SDice>
      {
        diceArray 
        && diceArray.length > 0
        && diceArray.map((dice, i) => {
          return (<Dot key={i} show={dice} />);
        })
      }
    </SDice>
  );
}

export default Dice;
