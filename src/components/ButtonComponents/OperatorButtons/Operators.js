import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorsState] = useState(operators);
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorState.map(element => <OperatorButton op={element}/>)}
    </>
  );
};

export default Operators;
