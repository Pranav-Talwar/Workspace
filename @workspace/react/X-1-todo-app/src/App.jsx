import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import './App.css'






function App() {
  const [count, setCount] = useState(0);

  return (
    <center class="todo-container">
      <AppName/>
     <AppTodo></AppTodo>
     <div class="items-container">

     <TodoItem1></TodoItem1>
     <TodoItem2></TodoItem2>


        

      
      </div>
    </center>
  );
}

export default App;
