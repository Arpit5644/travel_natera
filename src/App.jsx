import { useState } from "react";
import "./App.css";
import MyMap from "./MyMap"; // ✅ Import the map component

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <MyMap />
    </div>
  );
}

export default App;
