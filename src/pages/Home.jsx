import React, { useEffect, useState } from "react";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // delay animation
  }, []);

  return (
    <div className="text-center px-6">
      <h1
        className={`text-5xl md:text-6xl font-extrabold text-blue-600 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Welcome to <span className="text-blue-800">Travel Netra</span>
      </h1>
      <p
        className={`mt-6 text-lg md:text-xl text-gray-600 transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Discover the world with ease — Explore, Map, and Save your journeys.
      </p>
      <button
        className={`mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
