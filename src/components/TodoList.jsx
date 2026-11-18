import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          // Use a stable ID as the key, not the array index.
          // Spread all todo properties as props (same as passing id, title, and completed separately).
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
