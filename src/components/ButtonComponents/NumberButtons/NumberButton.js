import React from "react";

const NumberButton = (props) => {


  if(props.number !== "0"){
  return (
    <>
     <button name={props.number} onClick={e => props.onClick(e.target.name)}>
        {props.number}
      </button>
    </>
  );
  }
  else if(props.number === "0"){
    return (
      <>
       <button name={props.number} onClick={e => props.onClick(e.target.name)} className = "zero">
          {props.number}
        </button>
      </>
    );
  }
};

export default NumberButton;
