import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "./components/nav-buttons.jsx";
import { UseRoutes } from './components/Routes.jsx';
/* Hasta aca */
import "./App.css"


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="container">
          <div className="background">
            <div className="overlay"></div>
            <img src="./static/categories-icons/palette.svg" alt="XXXXXXXXX" />
          </div>
        </div>
        <UseRoutes />
      </div>
    </Router>
  );
}

export default App;

