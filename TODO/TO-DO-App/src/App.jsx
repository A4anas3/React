import AppName from "./component/AppName"
import AddToDO from "./component/AddToDO"
import TodoItem from "./component/TodoItem";
import TodoItem2 from "./component/TodoItem2";
import './App.css';
function App() {
  return (
     <center className="TODO-Container">
     <AppName />
     <AddToDO />
    <div className="todo-Item">
      
      <TodoItem/>
      <TodoItem2 />
      </div>
  
  

     </center>
);
}

export default App
