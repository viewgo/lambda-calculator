import React, { useState } from "react";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";

function App() {

  const [calc, setCalc] = useState("error");

  const onClick = button => {
    
    //NOT WORKING
    if (calc === "error") {
      console.log("error before click");      
      setCalc("");
    }

    if (button === "=") {
      calculate();
    } else if (button === "+/-") {
      if (calc.charAt(0) === "-") {
        setCalc(calc.substr(1));
      } else {
        setCalc("-" + calc);
      }
    } else if (button === "C") {
      reset();
    }
    else {
      setCalc(calc + button);
    }
  };

  const calculate = () => {
    let checkResult = "";
    checkResult = calc;
    checkResult = checkResult.replace("--", "+");

    try {
      setCalc(eval(checkResult) || "0");
    } catch (e) {
      setCalc("error");
    }
  };

  const reset = () => {
    console.log("RESET CALLED");
    setCalc("");
  };


  console.log(calc);

  return (
    <div className="container">
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Logo />
        <Display myCalc={calc} />

        <div className="buttons-container">
          <div className="specsnums">
            <div className="specs">
              <Specials onClick={onClick} />
            </div>
            <div className="nums">
              <Numbers onClick={onClick} />
            </div>
          </div>
          <div className="ops">
            <Operators onClick={onClick} />
          </div>

          {/* <Specials clickHandler={clickHandler} />
					<Numbers clickHandler={clickHandler} />
					<Operators clickHandler={clickHandler} /> */}
        </div>
      </div>
    </div>
  );
}
export default App;
