import React, { useState } from 'react';
import { searchWeather } from '../services/weatherService';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const data = await searchWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search Weather</button>
      {weather && <div>{JSON.stringify(weather)}</div>}
    </div>
  );
};

export default Weather;
