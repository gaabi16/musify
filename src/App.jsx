import React from "react";
import Playlist from "./components/Playlist"; 
import Navbar from './components/Navbar';
import Artist from "./components/Artist";

import "./assets/style.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Artist />
      <Playlist /> 
    </div>
  );
};

export default App;
