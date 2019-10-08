import React from "react";

const NumberButton = (props) => {

  if(props.number != 0){
  return (
    <>
     {console.log(props.number)}
      <button>
        {props.number}
      </button>
    </>
  );
  }
  else if(props.number == 0){
    return (
      <>
       {console.log(props.number)}
        <button className="zero">
          {props.number}
        </button>
      </>
    );
  }
};

export default NumberButton;
