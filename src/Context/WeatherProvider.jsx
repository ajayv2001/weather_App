import React, { createContext, useState } from 'react';

// Create the context
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ search, setSearch, weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
