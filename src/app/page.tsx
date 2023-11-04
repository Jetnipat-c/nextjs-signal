"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "TODOS";

export default function HomePage() {
  console.log("Render HomePage");

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return [];
    return JSON.parse(value);
  });

  const addTodo = (name) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), name, completed: false },
      ];
    });
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
    <div className="flex flex-col min-h-screen">
      <Navbar todos={todos} />
      <main className="flex-1 flex justify-between px-4">
        <TodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos} />
        <Sidebar />
      </main>
    </div>
  );
}
