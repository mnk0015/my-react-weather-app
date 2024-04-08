// WeatherDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherList from './WeatherList';
import WeatherSummary from './WeatherSummary';
import WeatherSearch from './WeatherSearch';
import WeatherFilters from './WeatherFilters';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            // You may add additional parameters here such as city, days, etc.
          },
        });
        setWeatherData(response.data.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeatherData();
  }, []);

  // Implement filter and search logic

  return (
    <div className="weather-dashboard">
      <WeatherSummary weatherData={weatherData} />
      <WeatherSearch setSearchQuery={setSearchQuery} />
      <WeatherFilters />
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default WeatherDashboard;
