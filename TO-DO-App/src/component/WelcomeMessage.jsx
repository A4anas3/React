import { useContext } from "react";
import style from "./WelcomMessage.module.css";
import { ContextTodoItems } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const todoItem = useContext(ContextTodoItems);
  return (
    todoItem.length == 0 && <h1 className={style.welcome}>Enjoy your day</h1>
  );
};

export default WelcomeMessage;
