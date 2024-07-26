import React, { useContext } from 'react';
import { WeatherContext } from '../Context/WeatherProvider';

const WeatherContent = () => {
  const { weatherData } = useContext(WeatherContext);
 


  return (
    <div className='flex-col w-1/2 h-44 bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='h-8 w-full bg-slate-500 flex items-center px-3'>
        <span className='text-white font-bold'>Current Weather in {weatherData?.name}</span>
      </div>
      <div className='flex h-36'>
        <div className='w-1/2 flex items-center justify-center bg-gray-100'>
          <div className='text-center'>
            <p className='text-6xl font-bold'>{(weatherData?.main.temp - 273.15).toFixed(1)}°</p>
            <p className='text-lg pr-5'>{weatherData?.weather[0]?.description}</p>
            

          </div>
        </div>
        <div className='w-1/2 flex flex-col justify-center bg-gray-200 px-3'>
          <div className='flex justify-between items-center'>
            <p className='text-xl'>RealFeel:</p>
            <p className='text-xl font-bold'>{(weatherData?.main.feels_like - 273.15).toFixed(1)}°</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-xl'>Wind:</p>
            <p className='text-xl font-bold'>{weatherData?.wind.speed} m/s</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-xl'>Humidity:</p>
            <p className='text-xl font-bold'>{weatherData?.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
