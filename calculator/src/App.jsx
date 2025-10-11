import style from "./App.module.css";
import Display from "./component/display";
import Button from "./component/button";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setCalVal(newDisplayvalue);
    }
  };
  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={calVal} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
