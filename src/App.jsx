import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMap from "./pages/MyMap";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="w-full">
        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50"
        >
          <Home />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="h-screen flex items-center justify-center bg-white"
        >
          <About />
        </section>

        {/* Map Section */}
        <section
          id="map"
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <MyMap />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
