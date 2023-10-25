import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); 
  // The state here represents application state, The very syntax 
  //  selector function is such that, no matter what name you give to that parameter it represents state of the application.

  function onDeleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }
  function onEditTodo(id, newTodo) {
    dispatch({ type: "edit_todo", payload: { id, newTodo } });
  }

  function onFinished(id, state) {
    dispatch({ type: "finish_todo", payload: { id, state } });
  }

  return (
    todos &&
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isFinished={todo.isFinished}
        deleteTodo={() => onDeleteTodo(todo.id)}
        // newTodo = new text of edited todo. argument inherited from TODO component.
        editTodo={(newTodo) => {
          onEditTodo(todo.id, newTodo);
        }}
        // state = checked state(true/false) from finishTodo args in TODO component. argument inherited from TODO component.
        finishTodo={(state) => {
          onFinished(todo.id, state);
        }}
      />
    ))
  );
}

export default TodoList;
