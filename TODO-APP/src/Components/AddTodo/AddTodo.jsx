import { useState } from "react";

function AddTodo({ addTodos }) {
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <input
        placeholder="Add your next todo...."
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}s
      />
      <button
        onClick={() => {
          addTodos(todoText);
          setTodoText("");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default AddTodo;