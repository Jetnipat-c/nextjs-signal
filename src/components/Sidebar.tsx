"use client";

const Sidebar = () => {
  console.log("Render Sidebar");
  return (
    <nav className="flex flex-col space-y-2 p-2">
      <a href="/link-1" className="underline">
        Link 1
      </a>
      <a href="/link-2" className="underline">
        Link 2
      </a>
      <a href="/link-3" className="underline">
        Link 3
      </a>
      <a href="/link-4" className="underline">
        Link 4
      </a>
    </nav>
  );
};

export default Sidebar;
