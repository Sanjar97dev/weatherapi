import React, { useState } from 'react';

const Weather = ({ getWeather, city }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = () => {
    getWeather(searchCity);
  };

  return (
    <div className="container">
      <div className="search-block">
        <h1>Прогноз погоды</h1>
        <div className="search-input">
          <input
            type="text"
            placeholder="Введите название города"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button type="button" className="btn btn-danger" onClick={handleSearch}>
            Показать
          </button>
        </div>
      </div>

      <div className="Weather-block">
        <div className="city-block">
          <div className="city-name"><h1>{city.city.name}</h1> <span className='country'>{city.city.country}</span></div>
        </div>
        <div className="temperature-block">
          <h1>{Math.round(city.list[0].main.temp - 273.15)}<span className='celsius'></span></h1>
          <span className='celsius'>°C</span>
          <img src={`http://openweathermap.org/img/wn/${city.list[0].weather[0].icon}.png`} />
        </div>
        <div className="weatherType-block">
          <h3>{city.list[0].weather[0].main}</h3>
        </div>

        <div className="el-block">
         {city.list.slice(1, 2).map((el, index ) => (
            <div key={index} className='el-item'>
                <h4>{new Date(el.dt * 1000).toLocaleDateString('en-US', {weekday: 'long' })}</h4>
                <p>Ветер: {el.wind.speed} м/с</p>
                <p>Влажность: {el.main.humidity}%</p>
            </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;


