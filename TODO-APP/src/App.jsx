import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";
import store from "./store";
import { Provider } from "react-redux";

function App() {

  

  return (
    <>
    <Provider store = {store} >
      <AddTodo  />
      <TodoList />
      </Provider>
    </>
  );
}

export default App;
