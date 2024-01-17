import React, { useEffect } from 'react'
import './Card.css'


export default function Card({ data }) {


    console.log(data);

    return (
        <>
            <div>
                {data ? (
                    // data.map((dato) => (
                    <div key={data.id} className='d-flex flex-column align-items-center'>
                        <h3> {data.hasOwnProperty('name') ? data.name : "Loading..."}</h3>
                        <p className='' style={{ fontSize: "3rem" }}>{parseInt(data.main.temp - 273.15) + "°"}</p>
                        <p className=''>{capitalizeEveryWord(data.weather[0].description)}</p>
                        <div>
                            <span>MAX: {parseInt(data.main.temp_max - 273.15) + "°"}</span> <span>MIN: {parseInt(data.main.temp_min - 273.15) + "°"}</span>
                        </div>

                    </div>
                    // )) 
                ) : (
                    "Loading..."
                )}
            </div>

            <div className='d-flex justify-content-around mt-5 container'>

                <div className='wind d-flex p-3 rettangolo'>
                    <div className='wind1'>

                        <div className='d-flex  align-items-center' style={{ height: "20px" }}>
                            <img src="https://icons.iconarchive.com/icons/colebemis/feather/256/wind-icon.png" alt="" style={{ width: "20px" }} />
                            <p className='my-0 ms-2 border-0'>VENTO</p>
                        </div>

                        <p className='m-0 fw-bold py-2'>{parseInt(data.wind.speed)} m/s</p>
                        <p className='m-0 fw-bold py-2'>{data.wind.deg} gradi</p>
                    </div>
                    <div className='wind2'>

                        <img src="https://icons.iconarchive.com/icons/iynque/ios7-style/256/Compass-icon.png" alt="" style={{ width: "70px" }} />
                    </div>

                </div>

                <div className='visibility  p-3 bordo'>

                <div className='d-flex  align-items-center' style={{ height: "20px" }}>
                            <img src="https://icons.iconarchive.com/icons/ionic/ionicons/256/eye-icon.png" alt="" style={{ width: "20px" }} />
                            <p className='my-0 ms-2'>VISIBILITA'</p>
                        </div>
                    <p className='secondo'>{data.visibility / 1000} km</p>
                    <p>{data.visibility > 5000 ? "Buona visibilità." : "Poca visibilità."}</p>

                </div>

                <div className='umidity  p-3 bordo'>

                <div className='d-flex  align-items-center' style={{ height: "20px" }}>
                            <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Science-Humidity-icon.png" alt="" style={{ width: "20px" }} />
                            <p className='my-0 ms-2'>UMIDITA'</p>
                        </div>
                    <p className='secondo'>{data.main.humidity} %</p>
                    <p>Punto di rugiada: 3°.</p>

                </div>

                <div className='pressione  p-3 bordo'>

                <div className='d-flex  align-items-center' style={{ height: "20px" }}>
                            <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Science-Pressure-icon.png" alt="" style={{ width: "20px" }} />
                            <p className='my-0 ms-2'>PRESSIONE</p>
                        </div>
                    <p className='secondo'>{data.main.pressure} hPa</p>


                </div>




            </div>

        </>
    )
}


function capitalizeEveryWord(sentence) {
    return sentence.replace(/\b\w/g, match => match.toUpperCase());
}

