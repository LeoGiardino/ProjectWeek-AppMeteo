import React from 'react'
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
    const [query, setQuery] = useState('');
  return (
    <>
        <NavBar query={setQuery} />
      <Main query={query} />
      <Footer />
    
    </>
  )
}
