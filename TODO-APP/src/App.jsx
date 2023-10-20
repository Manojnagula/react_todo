import { useReducer } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducers/TodoReducer";

function App() {
  const[todos, dispatch]= useReducer(TodoReducer,[]);

  

  return (
    <>
    <TodoContext.Provider value={{todos, dispatch}}>
      <AddTodo  />
      <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
