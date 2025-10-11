import { createContext } from "react";
import { useReducer } from "react";
import TodoItems from "../component/TodoItems";
export const ContextTodoItems = createContext({
  todoItems: [],
  addNewItem: () => {},
  handleDeleteitem: () => {},
});
const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
const TodoItemsContexProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useReducer(todoItemsReducer, []);

  const addnewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    setTodoItems(newItemAction);
  };

  const handleDeleteitem = (todoItems) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItems,
      },
    };
    setTodoItems(deleteItemAction);
  };
  return (
    <ContextTodoItems.Provider
      value={{ todoItems, addnewItem, handleDeleteitem }}
    >
      {children}
    </ContextTodoItems.Provider>
  );
};
export default TodoItemsContexProvider;
