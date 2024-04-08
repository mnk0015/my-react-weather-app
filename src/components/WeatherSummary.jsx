// WeatherSummary.jsx
import React from 'react';

function WeatherSummary({ weatherData }) {
  // Comment: Implement summary statistics here
  // For example, you can calculate the average temperature:
  const averageTemperature =
    weatherData.reduce((acc, curr) => acc + curr.temp, 0) / weatherData.length;

  return (
    <div className="weather-summary">
      <h2>Weather Summary</h2>
      <p>Average Temperature: {averageTemperature.toFixed(2)} °F</p>
      {/* Add more summary statistics as needed */}
    </div>
  );
}

export default WeatherSummary;
