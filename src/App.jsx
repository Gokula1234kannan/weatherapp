import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Current from "./components/current";
import Forecast from "./components/forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";

function App() {
  const [city, SetCity] = useState();
  const [clickedCity, SetClickedCity] = useState();
  const [citySuggestion, SetCitySuggestion] = useState([]);
  const [currentWeather, SetCurrent] = useState();
  const [forecastWeather, SetForecast] = useState();
  const [location, SetLocation] = useState();

  const autoCompURL =
    "https://api.weatherapi.com/v1/search.json?key=1c4c094576cb4db797d94438241810&q=";
  
  const WeatherURL= (city)=> `https://api.weatherapi.com/v1/forecast.json?key=1c4c094576cb4db797d94438241810&q=${city}&days=7&aqi=no&alerts=no`

  useEffect(() => {
    if(city && city.length > 3){
       fetchAutoCompAPI();
    }
   
  }, [city]);

  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      console.log(resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      SetCitySuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

 const handleSelectedCity = (city)=>{
  console.log('clicked city',city);
  SetClickedCity(city);
  fetchWeatherAPI(city);
  SetCitySuggestion([]);
 

 }

 const fetchWeatherAPI = async (city)=>{
  try{
    const response = await axios.get(WeatherURL(city));
    const resp = response.data;
    console.log(resp);
    SetCurrent(resp.current);
    SetForecast(resp.forecast);
    SetLocation(resp.location);
    console.log('Current',resp.current);
    console.log('Forecast',resp.forecast);
    console.log('Location',resp.location);
  
  }catch(e){
    console.log('weather API error',e);
  }
  
 }

  return (
    <>
      <h1 className="text-center mt-2">Weather App</h1>

      <div className="container bg-primary p-5 rounded mt-5">
        <input
          type="text"
          value={clickedCity}
          className="form-control"
          placeholder="Enter your city"
          onChange={(e) => {SetCity(e.target.value);
          if(e.target.value===""){
            SetCurrent();
            SetForecast();
            SetLocation();
            SetClickedCity();
            

          }

          }}
        />
        {/* {city && <h4>{city}</h4>} */}
        {citySuggestion &&
          citySuggestion.map((city,index) => {
            return (
              <div key={index}
                className="text-center bg-primary-subtle rounded p-2 bg-opacity-10 border border-info border-opacity-25 text-black"
                style={{ cursor: "pointer" }}
                onClick={() => handleSelectedCity(city)}
              >
                {city}
              </div>
            );
          })}

        {currentWeather && <Current currentWeather={currentWeather} location={location} />}
        {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location}/>}
      </div>
    </>
  );
}

export default App;
