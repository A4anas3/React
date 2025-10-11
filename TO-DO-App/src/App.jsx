import AppName from "./component/AppName";
import AddToDO from "./component/AddToDO";

import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContexProvider, {
  ContextTodoItems,
} from "./store/todo-items-store";

function App() {
  const { addNewItem, handleDeleteitem, todoItems } =
    useContext(ContextTodoItems);
  return (
    <TodoItemsContexProvider>
      <center className="TODO-Container">
        <AppName />
        <AddToDO onNewItem={addnewItem} />
        <WelcomeMessage />
        <TodoItems onDeleteClick={handleDeleteitem}></TodoItems>
      </center>
    </TodoItemsContexProvider>
  );
}

export default App;
