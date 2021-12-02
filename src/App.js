import './App.css';
import React,{useState,useEffect} from 'react';
import WeatherCard from './components/WeatherCard';
require('dotenv').config()

function App() {

  const [weatherFiveDays, setWeatherFiveDays] = useState(null);

  const fetchWeatherData = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=38.9072&lon=77.0369&appid=${process.env.REACT_APP_API_KEY}`).then(data=>data.json()).then(async json=>{
      setWeatherFiveDays(json.daily.slice(0,5))
    }).catch((err)=>
        console.log(err)
        )
  }

  const getDayOfTheWeek = (daysForward)=>{
    //arr of days
    const days = ['sun','mon','tues','weds','thurs','fri','sat']
    const date = new Date();
    const dayOfWeekNumber = date.getDay();
    return days[(dayOfWeekNumber+daysForward)%7]
  }

  useEffect(()=>{
    fetchWeatherData()
  }
  ,[])

  return (
    <div className="App">
      <div className = "weather-card-container">
      {weatherFiveDays?weatherFiveDays.map((dayData,idx)=>{
        console.log(idx)
        return (
          <WeatherCard 
          day={getDayOfTheWeek(idx)} 
          img = {`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
          min={dayData.temp.min}
          max={dayData.temp.max}
          />
        )
      }):<>loading...</>
      }
      </div>
    </div>
  );
}

export default App;
