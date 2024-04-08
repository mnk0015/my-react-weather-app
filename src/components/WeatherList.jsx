// WeatherList.jsx
import React from 'react';

function WeatherList({ weatherData }) {
  return (
    <div className="weather-list">
      <h2>Weather List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°F)</th>
            <th>Time for Moon Phase</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((weatherItem, index) => (
            <tr key={index}>
              <td>{weatherItem.datetime}</td>
              <td>{weatherItem.temp} °F</td>
              <td>{weatherItem.moonrise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherList;
