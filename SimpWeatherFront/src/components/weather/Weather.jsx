import React, { useEffect, useRef, useState } from 'react'
import './Weather.css' 
import search_icon from '../../assets/search_icon.png';
const Weather = () => {

const inputRef= useRef()

const [weatherData,setWeatherData]=useState(false);



const search = async(city)=>{
    
    try{

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        setWeatherData({
            humidity: data.main.humidity,
            windspeed: data.wind.speed,
            description:Math.round(data.main.temp),
            location:data.name,
            icon:data.weather[0].icon,
            
        });

    }
    catch(error){
        console.error("Error fetching weather data:", error);
    }

}

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// useEffect(()=>{
// search("London");

// },[])
    





  return (
    <div className='weather'>

        <div className="search-bar">
            <input type='text' placeholder='Search by city' ref={inputRef}               />
            <img src={search_icon}className='searchicon'        onClick={()=>search(inputRef.current.value)}                 />
        </div>

        <div className='weather-icon'>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="weather-icon"
            />
          </div>

        <div>
         <p className='location'>{weatherData.location}</p>
         <p className='temperature'>{weatherData.description}°C</p>
        </div>
        <div className="weather-data">

<div className="col">
    <p>{weatherData.humidity} % </p>
    <span>Humidity</span>

</div>
<div className="col">
    <p> &nbsp; &nbsp;{weatherData.windspeed} Km/h </p>
    <span>WindSpeed</span>

</div>


        </div>
        
        
       </div>
  )
}

export default Weather