import React from "react";

const OperatorButton = (props) => {
  return (
    <>      
      <button name={props.op.value} onClick={e => props.onClick(e.target.name)}>
        {props.op.char}
      </button>
    </>
  );
};

export default OperatorButton;
