import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import WeatherContent from './components/WeatherContent';
import WeatherProvider from './Context/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <div className='bg-customColor w-full h-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow flex flex-col justify-start '>
          <div className='w-full flex justify-center'>
            <div className='w-1/2 p-5 '>
              <Search />
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>

              <WeatherContent />

          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;

