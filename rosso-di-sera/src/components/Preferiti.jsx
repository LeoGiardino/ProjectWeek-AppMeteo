import React from 'react'

import './Preferiti.css'
import { Link } from 'react-router-dom';

export default function Preferiti({ny, to, be}) {

    return (

        <div className='container d-block mb-5 mt-3 px-0' >
            <h2 className='mb-3'>Preferiti</h2>
            <div className='d-flex justify-content-between'>
                

            <div className='prefCard ny'>
            <div className='d-flex cont'>
                    <div className='d-flex flex-column' style={{ width: "50%" }}>
                        <div className='p-3' style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{ny.name}</div>
                        <div className='ps-3' style={{ fontSize: "0.9rem" }}>{convertTimestampToDate(ny.dt)}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${ny.weather[0].icon}@2x.png`} alt="" style={{ width: "70px" }} /> <span style={{ fontWeight: "bold" }}>{ny.weather[0].main}</span></div>
                    </div>
                    <div className='d-flex flex-column align-items-center' style={{ width: "50%" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{parseInt(ny.main.temp - 273.15) + "°"}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{parseInt(ny.main.temp_min - 273.15) + "°"} / {parseInt(ny.main.temp_max - 273.15) + "°"}</div>
                    </div>
                </div>
            </div>
            
            <div className='prefCard to'>
            <div className='d-flex cont'>
                    <div className='d-flex flex-column' style={{ width: "50%" }}>
                        <div className='p-3' style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{to.name}</div>
                        <div className='ps-3' style={{ fontSize: "0.9rem" }}>{convertTimestampToDate(to.dt)}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${to.weather[0].icon}@2x.png`} alt="" style={{ width: "70px" }} /> <span style={{ fontWeight: "bold" }}>{to.weather[0].main}</span></div>
                    </div>
                    <div className='d-flex flex-column align-items-center' style={{ width: "50%" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{parseInt(to.main.temp - 273.15) + "°"}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{parseInt(to.main.temp_min - 273.15) + "°"} / {parseInt(to.main.temp_max - 273.15) + "°"}</div>
                    </div>
                </div>
            </div>
            <div  className='prefCard be' style={{ textDecoration: "none" }}>
            <div className='d-flex cont'>
                    <div className='d-flex flex-column' style={{ width: "50%" }}>
                        <div className='p-3' style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{be.name}</div>
                        <div className='ps-3' style={{ fontSize: "0.9rem" }}>{convertTimestampToDate(be.dt)}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${be.weather[0].icon}@2x.png`} alt="" style={{ width: "70px" }} /> <span style={{ fontWeight: "bold" }}>{be.weather[0].main}</span></div>
                    </div>
                    <div className='d-flex flex-column align-items-center' style={{ width: "50%" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{parseInt(be.main.temp - 273.15) + "°"}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{parseInt(be.main.temp_min - 273.15) + "°"} / {parseInt(be.main.temp_max - 273.15) + "°"}</div>
                    </div>
                </div>
            </div>

            </div>


        </div>

    )
}


function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    return date.toLocaleDateString('it-IT', options);
}