import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard/Dashboard"
import Task from "./pages/Task"
import History from "./pages/History"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Dashboard} />
        <Route path='/Task' Component={Task} />
        <Route path='/History' Component={History} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
