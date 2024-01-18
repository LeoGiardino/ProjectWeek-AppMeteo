import React, { useEffect, useState } from 'react';
import Card from './Card';
import Forecast from './Forecast';

export default function Main({ query }) {
  const [result, setResult] = useState();

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

  console.log(result);

  return (
    <>
      {result ? (
        <>
          <Card data={result} />
          <Forecast query={query} />
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}
