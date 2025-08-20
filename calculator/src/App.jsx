import style from "./App.module.css";
import Display from "./component/display";
import Button from "./component/Bsutton";

function App() {
  return (
    <>
      <div className={style.calculator}>
        <Display />
        <Button />
      </div>
    </>
  );
}

export default App;
