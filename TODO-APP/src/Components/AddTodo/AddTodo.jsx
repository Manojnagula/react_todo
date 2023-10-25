import { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const  dispatch  = useDispatch();
  const [todoText, setTodoText] = useState("");

  function addTodo(todoText) {
    dispatch({type: 'add_todo', payload: {todoText}})
  }

  return (
    <>
      <input
        placeholder="Add your next todo...."
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        onClick={() => {
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default AddTodo;