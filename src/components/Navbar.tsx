"use client";

const Navbar = ({ todos }) => {
  console.log("Render Navbar");
  return (
    <nav className="flex space-x-3 justify-end p-4 border-b">
      <div>Completed: {todos?.filter((todo) => todo.completed).length}</div>
      <a href="/link-1">Todos</a>
      <a href="/link-2">Account</a>
    </nav>
  );
};

export default Navbar;
