import React, { useState, useEffect } from 'react';
import './Forecast.css';
import { Col } from 'react-bootstrap';

export default function Forecast() {
    const [datas, setForecast] = useState({});

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=1040b2dc283aedf2fa6837b77d2361be');
                const data = await response.json();
                setForecast(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDatas();
    }, []);

    return (
        <div className='carrello mt-3 container px-0'>

            <div className="carousel-container">
                {datas.list && datas.list.map((item) => (

                    <div>
                        <Col key={item.dt} className="carousel-slide d-flex flex-column">
                            <div>{convertTimestampToTime(item.dt)}</div>
                            <div><img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" /></div>
                            <div>{parseInt(item.main.temp - 273.15) + "°"}</div>
                        </Col>
                    </div>


                ))}
                

        </div>
        </div >
    );
}

function convertTimestampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return formattedTime;
}
