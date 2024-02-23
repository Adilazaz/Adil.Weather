import React, { useState } from 'react';
import Weather from '../Weather';
import Error from '../Error';

const Form = () => {
  const [weather, setWeather] = useState({});
  const [cityVal, setCityVal] = useState('');

  const handleInputChange = (e) => {
    setCityVal(e.target.value);
  };

  const Search = (e) => {
    e.preventDefault();
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=b39a21ed8b03186539d416cc1940bed5`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b39a21ed8b03186539d416cc1940bed5`)
      .then(res => res.json())
      .then(d => setWeather(d))
      

  };

  return (
    <div  className='allWeather'>
      <form onSubmit={Search}>
        <input className="input" type="text" value={cityVal} onChange={handleInputChange} placeholder="City" />
        <button className="submit" type="submit">Search</button>
      </form>
      <Weather weather={weather} />
    </div>
  );
}

export default Form;
