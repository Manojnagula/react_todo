import Todo from "../Todo/Todo";

function TodoList({ todos, setTodos }) {
  function onDeleteTodo(id) {
    const newTodoList = todos.filter((todo) => todo.id != id);
    setTodos(newTodoList);
  }
  function onEditTodo(id, newTodo) {
    const newTodoList = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = newTodo;
      }
      return todo;
    });
    setTodos(newTodoList);
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
        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
      />
    ))
  );
}

export default TodoList;
