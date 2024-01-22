
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';




function App() {

  const [query, setQuery] = useState('');

  return (
    <BrowserRouter >
      <NavBar query = {setQuery}/>
      <Main query={query}/>
      <Footer />
        <Routes >
          <Route/>

        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
