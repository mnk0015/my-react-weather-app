// WeatherDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherList from './WeatherList';
import WeatherSummary from './WeatherSummary';
import WeatherSearch from './WeatherSearch';
import WeatherFilters from './WeatherFilters';

const API_KEY = '';
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
            city: 'New York City', // Comment 1: Select New York City as the location
          },
        });
        setWeatherData(response.data.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeatherData();
  }, []);

  // Comment 2: Implement filter and search logic
  // For example, you can implement a filter and search function like this:
  const filteredData = weatherData.filter(weatherItem =>
    weatherItem.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="weather-dashboard">
      <WeatherSummary weatherData={weatherData} />
      <WeatherSearch setSearchQuery={setSearchQuery} />
      <WeatherFilters />
      <WeatherList weatherData={filteredData} />
    </div>
  );
}

export default WeatherDashboard;
