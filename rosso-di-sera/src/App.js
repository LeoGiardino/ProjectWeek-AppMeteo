// App.js
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
