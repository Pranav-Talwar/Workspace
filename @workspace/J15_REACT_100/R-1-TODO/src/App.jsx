import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
export default App;
