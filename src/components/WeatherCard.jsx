import React,{useState,useEffect} from 'react';

function WeatherCard({day,img,max,min}){
return(
    <div className = "weather-card">
        <div>
            {day}
        </div>
        <div className = "img-wrapper">
            <img src={img}/>
        </div>
        <div className = "temp-container">
            <div className = "temp-max">
                {Math.floor((max - 273.15) * (9/5) + 32)}&deg;
            </div>
            <div className = "temp-min">
                {Math.floor((min - 273.15) * (9/5) + 32)}&deg;
            </div>
        </div>
    </div>
)
}

export default WeatherCard