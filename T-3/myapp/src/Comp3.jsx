import React, { useContext } from "react";
import { NumberContext } from "./Comp";

function Comp3() {
  const { number1, number2 } = useContext(NumberContext);

  const multiplication = number1 * number2;

  return (
    <div>
      <h3>Component 3</h3>
      <p>Number 1: {number1}</p>
      <p>Number 2: {number2}</p>
      <p>Multiplication: {multiplication}</p>
    </div>
  );
}

export default Comp3;