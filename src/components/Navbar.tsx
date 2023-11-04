"use client";

const Navbar = () => {
  console.log("Render Navbar");
  return (
    <nav className="flex space-x-3 justify-end p-4 border-b">
      <a href="/link-1">Todos</a>
      <a href="/link-2">Account</a>
    </nav>
  );
};

export default Navbar;
