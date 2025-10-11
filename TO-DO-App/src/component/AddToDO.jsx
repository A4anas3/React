import { useState, useRef } from "react";
import { IoIosAdd } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const todoNamechange = useRef();
  const todoDate = useRef();

  const handinputchange = (event) => {
    setToDoName(event.target.value);
    // noOfClick.current += 1;
  };

  // const handleDatechange = (event) => {
  //   setDueDate(event.target.value);
  //   // console.log(`no of ${noOfClick.current}`);
  // };
  const handleButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNamechange.current.value;
    const dueDate = todoDate.current.value;
    todoNamechange.current.value = "";
    todoDate.current.value = "";

    onNewItem(todoName, dueDate);
    // setToDoName("");
    // setDueDate("");
  };

  return (
    <div className="container">
      <form className="row kg-row" action="" onSubmit={handleButtonClicked}>
        <div className="col-sm-4">
          <input
            type="text"
            ref={todoNamechange}
            // value={todoName}
            placeholder="todo here"
            // onChange={handinputchange}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            ref={todoDate}
            // value={dueDate}
            // onChange={handleDatechange}
          />
        </div>
        <div className="col-sm-2">
          <button
            // type="button"
            className="btn btn-success kg-Button"
            // onClick={handleButtonClicked}
          >
            <IoIosAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
