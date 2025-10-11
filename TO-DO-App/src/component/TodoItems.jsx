import { useContext } from "react";
import { ContextTodoItems } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ onDeleteClick }) => {
  const { todoItems } = useContext(ContextTodoItems);

  return (
    <div className={style["item-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.date}
          todoname={item.name}
          DeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
