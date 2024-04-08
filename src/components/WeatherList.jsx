// WeatherList.jsx
import React from 'react';

function WeatherList({ weatherData }) {
  return (
    <div className="weather-list">
      <h2>Weather List</h2>
      <ul>
        {weatherData.map((weatherItem, index) => (
          <li key={index}>
            {/* Render weather item details */}
            {/* You can customize the display of each weather item */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;
