import React, { useEffect, useState } from 'react';
import '../src/App.css';
import Weather from './Weather';

const App = () => {
  const apiKey = '24f1656ccac8f806658e32b9bad90614';
  const [city, setCity] = useState(null);

  async function getWeather(name = 'Bishkek') {
  
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}`);
      const data = await res.json();
      setCity(data);
      console.log(data);
  }

  useEffect(() => {
    getWeather();
  }, []);

  if (city === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Weather getWeather={getWeather} city={city} />
    </div>
  );
};

export default App;

