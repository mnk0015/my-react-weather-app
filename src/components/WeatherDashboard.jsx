// WeatherDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherList from './WeatherList';
import WeatherSummary from './WeatherSummary';
import WeatherSearch from './WeatherSearch';
import WeatherFilters from './WeatherFilters';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


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
            city: 'New York City', // Select New York City as the location
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
  const filteredData = weatherData.filter(weatherItem =>
    weatherItem.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="weather-dashboard">
      <WeatherSummary weatherData={weatherData} />
      <WeatherSearch setSearchQuery={setSearchQuery} />
      <WeatherFilters />
      <WeatherList weatherData={filteredData} />
      <div className="chart-container">
        <LineChart width={800} height={400} data={weatherData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}

export default WeatherDashboard;
