import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const {todos, dispatch} = useContext(TodoContext);
  
  function onDeleteTodo(id) {
  
    dispatch({type: 'delete_todo', payload:{id}})

  }
  function onEditTodo(id, newTodo) {
  
    dispatch({type: 'edit_todo', payload:{id,newTodo}})
  
  }

  function onFinished(id, state){
 
    dispatch({type:'finish_todo',payload: {id,state}})
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
        finishTodo={(state)=> onFinished(todo.id, state)}
      />
    ))
  );
}

export default TodoList;