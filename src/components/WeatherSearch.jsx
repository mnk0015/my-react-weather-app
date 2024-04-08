// WeatherSearch.jsx
import React from 'react';

function WeatherSearch({ setSearchQuery }) {
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="weather-search">
      <input
        type="text"
        placeholder="Search weather..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default WeatherSearch;
