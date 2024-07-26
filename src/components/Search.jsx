import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { WeatherContext } from '../Context/WeatherProvider';

const Search = () => {
  const { search, setSearch, setWeatherData } = useContext(WeatherContext);

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ab37c8c9b9355fb745ffc09329aacf6`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    const defaultCity = 'Kozhikode';
    handleSearch(defaultCity); // Fetch weather data for the default city on initial load
  }, [setSearch]); // Ensure setSearch is included in the dependency array

  return (
    <div className='flex gap-1'>
      <input
        className='w-full text-slate-400 h-8 rounded-md border-2 border-neutral-600 p-2'
        type='text'
        placeholder='Enter the City Name'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        onClick={() => handleSearch(search)}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Search
      </button>
    </div>
  );
};

export default Search;
