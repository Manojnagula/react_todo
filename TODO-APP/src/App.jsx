import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { isFinished: true, text: "todo1", id: 1 },
    { isFinished: false, text: "todo2", id: 2 },
    { isFinished: true, text: "todo3", id: 3 },
  ]);

  function addTodos(todoText) {
    let nextId = todos.length + 1;
    setTodos([...todos, { id: nextId, isFinished: false, text: todoText }]);
  }

  return (
    <>
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
