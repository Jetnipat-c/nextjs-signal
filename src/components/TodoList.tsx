"use client";

import { useState } from "react";

const TodoList = ({ todos, addTodo, toggleTodo }) => {
  console.log("Render TodoList");
  const [newTodoName, setNewTodoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoName);
    setNewTodoName("");
  };

  return (
    <div className="flex-1 border-r p-4">
      <form onSubmit={addTodo} className="grid gap-4">
        <label>New Task</label>
        <input
          className="border"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          type="text"
        />
        <button className="bg-gray-400 text-white">Add</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                className="mr-3"
              />
              {todo.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
