import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoContext from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([
    { isFinished: true, text: "todo1", id: 1 },
    { isFinished: false, text: "todo2", id: 2 },
    { isFinished: true, text: "todo3", id: 3 },
  ]);

  

  return (
    <>
    <TodoContext.Provider value={{todos, setTodos}}>
      <AddTodo  />
      <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
