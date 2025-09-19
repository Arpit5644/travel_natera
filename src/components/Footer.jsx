import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 border-t mt-8">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Travel Netra. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

