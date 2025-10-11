import style from "./button.module.css";

const Button = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style["button-container"]}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(btn)}
          className={style.button}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Button;
