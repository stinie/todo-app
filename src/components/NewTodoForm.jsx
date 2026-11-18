import { useState } from "react";

function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [description, setDescription] = useState("");

  // Receive the submit event so we can prevent the page from reloading.
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem, description);
    setNewItem("");
    setDescription("");
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Todo</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="My todo"
        />
        <label htmlFor="description">Description (optional)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe my todo"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default NewTodoForm;
