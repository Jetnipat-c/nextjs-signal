"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";

export default function HomePage() {
  console.log("Render HomePage");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-between px-4">
        <TodoList />
        <Sidebar />
      </main>
    </div>
  );
}
