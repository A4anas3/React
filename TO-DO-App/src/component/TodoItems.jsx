import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={style["item-container"]}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.date} todoname={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
