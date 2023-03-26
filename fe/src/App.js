import './App.css';
import React from 'react'
import Home from './Components/Home';
import MainScreen from './Components/MainScreen';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {


  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/MainScreen" element ={<MainScreen/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
