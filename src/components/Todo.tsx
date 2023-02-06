import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "./styled/Card.styled";
import { InputE } from "./styled/InputE.styled";
import { Button } from "./styled/Button.styled";

const DivAlign = styled.div`
  margin-top: 50px;
`;

interface ICalculatorState {
  input1: number;
  input2: number;
  result: number;
}

const Todo: React.FC = () => {
  const [state, setState] = useState<ICalculatorState>({
    input1: 0,
    input2: 0,
    result: 0,
  });

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, input1: Number(e.target.value) });
  };

  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, input2: Number(e.target.value) });
  };

  const handlePlus = () => {
    const { input1, input2 } = state;
    setState({ ...state, result: input1 + input2 });
  };

  return (
    <DivAlign>
      <Card>
        <InputE
          data-testid="input1"
          type="number"
          value={state.input1}
          onChange={handleInput1}
        />
        <InputE
          data-testid="input2"
          type="number"
          value={state.input2}
          onChange={handleInput2}
        />
        <Button data-testid="plusButton" onClick={handlePlus}>
          Calculate
        </Button>
        <p data-testid="result">{state.result}</p>
      </Card>
    </DivAlign>
  );
};

export default Todo;
