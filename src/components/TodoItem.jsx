import { useState } from "react";

function TodoItem({
  completed,
  id,
  title,
  description,
  toggleTodo,
  deleteTodo,
}) {
  // const [count, setCount] = useState(0);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          autoFocus
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <div className="todo-content">
          <span>{title}</span>
          {description && <small>{description}</small>}
        </div>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Done
      </button>
    </li>
  );
}

export default TodoItem;
