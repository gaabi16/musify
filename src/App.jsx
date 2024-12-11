import React from "react";
import Navbar from "./components/Navbar";
import MusicLibrary from "./components/MusicLibrary";

import "./assets/style.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MusicLibrary />
    </div>
  );
};

export default App;
