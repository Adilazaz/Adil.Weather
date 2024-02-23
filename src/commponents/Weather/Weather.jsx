import React from 'react';

const Weather = ({ weather, cityVal }) => {
  if (!weather || !weather.sys || !weather.main || !weather.dt) {
    return (
      <div className='error' >{weather.message}</div>
    );
  }
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  };

  var a = new Date(weather.dt * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var month = months[a.getMonth()];

  return (
    <div className='weather'>
      <div className="name">
        <span>{weather.sys.country}</span><br />
        <span>{weather.name}</span>
      </div>

      <div className="toDay">
        <span>Date: {month + '-' + new Date(weather.dt * 1000).getDate(undefined)}</span><br />
        <span>Temp like: {(weather.main.feels_like - 273).toFixed(0)}°C  </span>
      </div>

      <div className="sun">
        <span>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString(undefined, options)} </span> <br />
        <span>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString(undefined, options)}</span>
      </div>

      <div className="temp">
        <span>Humidity: {weather.main.humidity}% </span><br />
      </div>
    </div>
  );
}

export default Weather;