import React from "react";

const OperatorButton = (props) => {
  return (
    <>      
      <button>
        {props.op.char}
      </button>
    </>
  );
};

export default OperatorButton;
