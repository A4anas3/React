import { useDispatch } from "react-redux";
import React, { useRef } from "react";
const Control = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "SUB",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center  control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="Number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Sub
        </button>
      </div>
    </>
  );
};
export default Control;
