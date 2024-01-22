import React, { useEffect, useState } from 'react';
import Card from './Card';
import Forecast from './Forecast';
import Mappa from './Mappa';
import Preferiti from './Preferiti';
import Footer from './Footer';

export default function Main({ query }) {
  const [result, setResult] = useState();
  const [berlin, setBerlin] = useState();
  const [newyork, setNewYork] = useState();
  const [tokyo, setTokyo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1040b2dc283aedf2fa6837b77d2361be`
        );

        if (response.status === 400) {
          // Se la prima richiesta ha uno stato 400, effettua la seconda richiesta
          const fallbackResponse = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=london&appid=1040b2dc283aedf2fa6837b77d2361be'
          );
          const fallbackData = await fallbackResponse.json();
          setResult(fallbackData);
        } else {
          // Se la prima richiesta va a buon fine, utilizza i dati restituiti
          const data = await response.json();
          setResult(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Eseguire fetchData solo quando query cambia
    fetchData();
  }, [query]);

  useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=new+york&appid=1040b2dc283aedf2fa6837b77d2361be')
      .then(response => response.json())
      .then(data => {
        setNewYork(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [] );

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=1040b2dc283aedf2fa6837b77d2361be')
    .then(response => response.json())
    .then(data => {
      setTokyo(data);
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
}, [] );

useEffect(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=1040b2dc283aedf2fa6837b77d2361be')
  .then(response => response.json())
  .then(data => {
    setBerlin(data);
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
}, [] );

  console.log(result);

  return (
    <>
      {result ? (
        <>
          <Card data={result} />
        <div className='container d-flex align-items-start justify-content-between px-0 mb-4' style={{ height: "260px"}}>
          <Forecast query={query} />
          <Mappa data={result} />

        </div>
        </>
      ) : (
        "Loading..."
      )}

      {newyork && tokyo && berlin ? (
          <Preferiti ny={newyork} to={tokyo} be={berlin} />
      ) : (
        "Loading..."
      )}

      

        
    </>
  );
}
