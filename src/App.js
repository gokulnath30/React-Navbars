import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";

import Sidebar  from "./components/Sidebar";
import Navbar  from "./components/Navbar";

import Home from './pages/Home'
import Settings from './pages/Settings'

function App() {
  return (
       
      <Router>
          <Sidebar/>
          <Navbar/>
          <div className="main">
              <div className="main-container">
              <Routes>
                <Route exact  path="/" element={<Home />} />
                <Route  path="*" element={<Settings />} />
              </Routes>
              </div>
          </div>
      </Router>

  
  );
}

export default App;

