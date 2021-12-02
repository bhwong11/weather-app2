import React,{useState,useEffect} from 'react';

function WeatherCard({day,img,max,min}){
return(
    <div>
        {day}
        <img src={img}/>
        max:{max}
        min: {min}
    </div>
)
}

export default WeatherCard