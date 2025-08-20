import AppName from "./component/AppName"
import AddToDO from "./component/AddToDO"

import TodoItems from "./component/TodoItems";
import './App.css';
function App() {
    const todoItems=[{
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {name: "go to college",
      date:"2/03/2024",
    },
  ];
  return (
     <center className="TODO-Container">
     <AppName />
     <AddToDO />
   <TodoItems todoItems={todoItems}></TodoItems>
  

     </center>
);
}

export default App
