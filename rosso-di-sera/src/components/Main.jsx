import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'
import Forecast from './Forecast';


export default function Main({ query }) {

    const [result, setResult] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=1040b2dc283aedf2fa6837b77d2361be');
                const data = await response.json();
                setResult(data);
            } catch (error) {
                console.log(error);
            }
        };

        // Eseguire fetchData solo quando query cambia
        fetchData();
    }, [query]);

 

    return (
        <>
            {result ? (
                <>
                    <Card data={result} />
                    <Forecast />
                </>
            ) : (
                "Loading..."
            )}
        </>
    )
}
