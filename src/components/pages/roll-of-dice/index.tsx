import React, { useState } from 'react';
import Dices from '../../modules/dices';
import Button from '../../ui/button';
import Input from '../../ui/input';

function RollOfDice() {

  const [noOfDice, setNoOfDice] = useState<number>(0);

  const onRollChange = (e:any) => {
    e.preventDefault();
    setNoOfDice(Number(e.target[0].value));
  }

  return (
    <div>
      <h1>Roll of Dice</h1>
      <form onSubmit={onRollChange}>
        <Input placeholder='Enter the number of dice' id="rollInput" name="rollInput" />
        <Button type='submit' name='Roll' />
      </form>
      <Dices numberOfDices={noOfDice}/>
    </div>
  );
}

export default RollOfDice;
