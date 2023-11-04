"use client";

import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "TODOS";

const TodoList = () => {
  console.log("Render TodoList");

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return [];
    return JSON.parse(value);
  });

  const [newTodoName, setNewTodoName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), name: newTodoName, completed: false },
      ];
    });

    setNewTodoName("");
  };

  const toggleTodo = (id, completed) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
        {todos.map((todo) => (
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
