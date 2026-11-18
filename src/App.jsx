import { useState } from "react";
import "./App.css";
import NewToddoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import turtle from "./assets/turtle.png";

function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(title, description) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, // Use the latest todos state when adding a new item.
        { id: crypto.randomUUID(), title, description, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            // Return a new todo object with the updated completed value.
            return { ...todo, completed}
          }
          return todo;
        })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }

  return (
    <>
      <h1>My ToDo App 📋</h1>
      <NewToddoForm onSubmit={addTodo} />
      <h2 className="header">Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
      <img src={turtle} alt="A smiling turtle" className="turtle-image" />
    </>
  );
}

export default App;
