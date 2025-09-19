import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-blue-600">Travel Netra</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#map" className="hover:text-blue-500">Map</a>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
